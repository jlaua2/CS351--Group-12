# backend/api/search_engine.py

from .data_structures.pricematchtrie import PriceMatchTrie
from .data_structures.union import UnionFind

# Create global instances of the data structures
price_trie = PriceMatchTrie()
union_find = UnionFind()


def initialize_structures():
    """Load all ProductResult data into Trie & Union-Find."""

    from .models import ProductResult

    products = ProductResult.objects.all()  # type: ignore

    # Rebuild Trie from DB
    price_trie.rebuild_from_products(products)

    for p in products:
        union_find.find(p.id)

    PRESET_TITLES = [
        "iPhone 15",
        "iPhone 14",
        "iPhone 13",
        "Samsung Galaxy S23",
        "AirPods Pro",
        "PlayStation 5",
        "Nintendo Switch",
        "MacBook Air",
        "MacBook Pro 14-inch",
        "Xbox Series X",
        "Apple Watch Series 9",
        "Google Pixel 8",
    ]

    for title in PRESET_TITLES:
        # Add them as fake Trie entries
        price_trie.insert(title.lower(), {"title": title})  # type: ignore


def autocomplete_products(prefix: str, limit: int = 10):
    """Public API for Trie autocomplete."""
    return price_trie.search_prefix(prefix, limit=limit)


def union_products(id1, id2):
    """Public API to union two product IDs."""
    union_find.union(id1, id2)


def get_product_group(product_id):
    """Public API to get all IDs in same set."""
    return union_find.group_members(product_id)
