import os
import requests
from dotenv import load_dotenv
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ProductResult
from . import search_engine  # safe import

load_dotenv()
SERPAPI_KEY = os.environ.get("SERPAPI_KEY")


# ---------------------------------------------------------
# BASIC SERPAPI SEARCH
# ---------------------------------------------------------
def search(request):
    query = request.GET.get("q", "").strip()

    if not query:
        return JsonResponse({"results": []})

    if not SERPAPI_KEY:
        return JsonResponse({"error": "Missing SERPAPI_KEY"}, status=500)

    url = "https://serpapi.com/search.json"
    params = {"engine": "google", "q": query, "api_key": SERPAPI_KEY}

    try:
        r = requests.get(url, params=params)
        data = r.json()
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

    organic = data.get("organic_results", [])
    results = [
        {
            "title": item.get("title"),
            "link": item.get("link"),
            "snippet": item.get("snippet"),
        }
        for item in organic
    ]

    return JsonResponse({"results": results})


# ---------------------------------------------------------
# SHOPPING COMPARISON — MERGED VERSION
# ---------------------------------------------------------
def compare_products(request):
    query = request.GET.get("q", "").strip()

    if not SERPAPI_KEY:
        return JsonResponse({"error": "Missing SERPAPI_KEY"}, status=500)

    url = "https://serpapi.com/search.json"
    params = {
        "engine": "google_shopping",
        "q": query,
        "api_key": SERPAPI_KEY,
        "num": 40,
    }

    try:
        response = requests.get(url, params=params)
        data = response.json()

        shopping = data.get("shopping_results", [])
        results = []

        fallback_thumb = "https://via.placeholder.com/200?text=No+Image"

        for item in shopping:
            # extract price safely
            price = 0
            raw_price = item.get("extracted_price") or item.get("price")
            if raw_price:
                try:
                    price = float(str(raw_price).replace("$", "").replace(",", ""))
                except:
                    price = 0

            # choose best thumbnail
            thumbnail = (
                item.get("thumbnail")
                or item.get("product_link_image")
                or item.get("source_image")
                or fallback_thumb
            )

            # save to database
            saved = ProductResult.objects.create(
                query=query,
                store=item.get("source", "Unknown Store"),
                title=item.get("title", "No title"),
                price=price,
                shipping=0,
                link=item.get("product_link") or item.get("link"),
                in_store=False,
                online=True,
            )

            # add to Trie + Union Find
            search_engine.price_trie.add_product(saved)
            search_engine.union_find.find(saved.id)

            # frontend result object
            results.append(
                {
                    "id": saved.id,
                    "store": saved.store,
                    "title": saved.title,
                    "price": saved.price,
                    "shipping": saved.shipping,
                    "link": saved.link,
                    "thumbnail": thumbnail,
                    "in_store": saved.in_store,
                    "online": saved.online,
                }
            )

        return JsonResponse({"results": results})

    except Exception as e:
        print("ERROR:", e)
        return JsonResponse({"error": str(e)}, status=500)


# ---------------------------------------------------------
# AUTOCOMPLETE (Trie)
# ---------------------------------------------------------
@api_view(["GET"])
def autocomplete(request):
    prefix = request.GET.get("q", "").strip()
    results = search_engine.autocomplete_products(prefix)
    return Response(results)


# ---------------------------------------------------------
# UNION TWO PRODUCT IDS
# ---------------------------------------------------------
@api_view(["POST"])
def union_ids(request):
    id1 = request.data.get("id1")
    id2 = request.data.get("id2")

    if not id1 or not id2:
        return Response({"error": "id1 and id2 required"}, status=400)

    search_engine.union_products(id1, id2)
    return Response({"message": "Union completed"})


# ---------------------------------------------------------
# GET GROUP FOR PRODUCT ID
# ---------------------------------------------------------
@api_view(["GET"])
def get_group(request, product_id):
    group = search_engine.get_product_group(product_id)
    if not group:
        return Response({"error": "No group found"}, status=404)
    return Response({"group": group})
