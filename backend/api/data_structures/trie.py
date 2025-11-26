# backend/api/data_structures/trie.py

from typing import Dict, List, Any, Optional
from collections import deque


class TrieNode:
    def __init__(self):
        self.children: Dict[str, "TrieNode"] = {}
        self.is_end: bool = False
        self.items: List[Any] = []  # store product objects or IDs


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def _normalize(self, word: str) -> str:
        return word.strip().lower()

    def insert(self, word: str, item: Optional[Any] = None) -> None:
        word = self._normalize(word)
        if not word:
            return

        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]

        node.is_end = True
        if item is not None:
            node.items.append(item)

    def _find_node(self, prefix: str) -> Optional[TrieNode]:
        prefix = self._normalize(prefix)
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def autocomplete(self, prefix: str, limit: int = 10):
        node = self._find_node(prefix)
        if not node:
            return []

        prefix = self._normalize(prefix)
        results = []
        queue = deque([(node, prefix)])

        while queue and len(results) < limit:
            current, word = queue.popleft()

            if current.is_end:
                for item in current.items:
                    results.append((word, item))
                    if len(results) >= limit:
                        return results

            for ch, child in current.children.items():
                queue.append((child, word + ch))

        return results
