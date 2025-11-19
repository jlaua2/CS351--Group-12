import os
import requests
from django.http import JsonResponse

SERPAPI_KEY = os.environ.get("SERPAPI_KEY")



def search(request):
    """Simple SerpAPI web search."""
    query = request.GET.get("q", "").strip()
    if not query:
        return JsonResponse({"results": []})

    if not SERPAPI_KEY:
        return JsonResponse({"error": "Missing SERPAPI_KEY"}, status=500)

    url = "https://serpapi.com/search.json"
    params = {
        "engine": "google",
        "q": query,
        "api_key": SERPAPI_KEY
    }

    try:
        r = requests.get(url, params=params)
        data = r.json()
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

    organic = data.get("organic_results", [])
    results = [{
        "title": item.get("title"),
        "link": item.get("link"),
        "snippet": item.get("snippet")
    } for item in organic]

    return JsonResponse({"results": results})




def compare_products(request):
    query = request.GET.get("q", "").strip()
    print("QUERY:", query)

    serp_key = os.environ.get("SERPAPI_KEY")

    if not serp_key:
        return JsonResponse({"error": "SERPAPI_KEY missing"}, status=500)

    url = "https://serpapi.com/search.json"
    params = {
        "engine": "google_shopping",
        "q": query,
        "api_key": serp_key,
        "num": 40
    }

    try:
        response = requests.get(url, params=params)
        data = response.json()

        shopping = data.get("shopping_results", []) or []

        results = []
        fallback_thumb = "https://via.placeholder.com/80"

        for i, item in enumerate(shopping):

            # Extract price safely
            price = 0
            if item.get("extracted_price") is not None:
                price = float(item["extracted_price"])
            elif item.get("price"):
                try:
                    price = float(item["price"].replace("$", "").replace(",", ""))
                except:
                    price = 0

            results.append({
                "id": i,
                "store": item.get("source", "Unknown Store"),
                "title": item.get("title", "No title"),
                "price": price,
                "shipping": 0,
                "link": item.get("link") or item.get("product_link"),
                "thumbnail": item.get("thumbnail") or fallback_thumb,
                "online": True,
                "inStore": False
            })

        return JsonResponse({"results": results})

    except Exception as e:
        print("ERROR:", e)
        return JsonResponse({"error": str(e)}, status=500)