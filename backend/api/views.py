from django.http import JsonResponse
from .search_engine import price_trie

def search_products(request):
    query = request.GET.get("q", "").strip()
    print("SEARCH QUERY RECEIVED:", query)

    if not query:
        return JsonResponse({"results": []})

    results = price_trie.search(query)

    if not results:
        return JsonResponse({"results": []})

    # Convert dict -> list
    return JsonResponse({"results": list(results.values())})
