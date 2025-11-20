# backend/api/data_structures/pricematchtrie.py

from typing import Iterable, List, Dict, Any
from .trie import Trie


class PriceMatchTrie:
    def __init__(self):
        self.trie = Trie()

    def rebuild_from_products(self, products: Iterable[Any]) -> None:
        """Rebuild the Trie using existing ProductResult objects."""
        self.trie = Trie()
        for product in products:
            title = getattr(product, "title", None)
            if title:
                self.trie.insert(title, item=product)

    def add_product(self, product: Any) -> None:
        """Insert a single ProductResult into the Trie."""
        title = getattr(product, "title", None)
        if title:
            self.trie.insert(title, item=product)

    def search_prefix(self, prefix: str, limit: int = 10) -> List[Dict[str, Any]]:
        """
        Returns autocomplete results as a clean list of dictionaries.
        """
        matches = self.trie.autocomplete(prefix, limit=limit)
        results: List[Dict[str, Any]] = []

        for word, product in matches:
            if product is None:
                continue

            results.append(
                {
                    "id": getattr(product, "id", None),
                    "title": getattr(product, "title", word),
                    "store": getattr(product, "store", ""),
                    "price": getattr(product, "price", 0),
                    "shipping": getattr(product, "shipping", 0),
                    "link": getattr(product, "link", ""),
                    "in_store": getattr(product, "in_store", False),
                    "online": getattr(product, "online", True),
                }
            )

        return results
