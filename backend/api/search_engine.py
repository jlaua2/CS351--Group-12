# backend/api/search_engine.py

from .data_structures.pricematchtrie import PriceMatchTrie
from .data_structures.union import UnionFind

# Create global instances of the data structures
price_trie = PriceMatchTrie()
union_find = UnionFind()


def initialize_structures():
    """
    Load all ProductResult rows into Trie & Union-Find.

    NOTE: Must use lazy import to avoid Django AppRegistryNotReady errors.
    """
    from .models import ProductResult  # <-- CRITICAL lazy import

    products = ProductResult.objects.all()  # type: ignore

    # Rebuild Trie
    price_trie.rebuild_from_products(products)

    # Seed all product IDs into union-find
    for p in products:
        union_find.find(p.id)


def autocomplete_products(prefix: str, limit: int = 10):
    """Public API for Trie autocomplete."""
    return price_trie.search_prefix(prefix, limit=limit)


def union_products(id1, id2):
    """Public API to union two product IDs."""
    union_find.union(id1, id2)


def get_product_group(product_id):
    """Public API to get all IDs in same set."""
    return union_find.group_members(product_id)
