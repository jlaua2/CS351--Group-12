# backend/api/data_structures/union.py

from typing import Dict, Any, List


class UnionFind:
    """
    Disjoint Set Union (Union-Find) with path compression and union by rank.
    Works with any hashable element (typically product IDs).
    """

    def __init__(self):
        self.parent: Dict[Any, Any] = {}
        self.rank: Dict[Any, int] = {}

    def _add(self, x: Any) -> None:
        """Ensure an element exists in the data structure."""
        if x not in self.parent:
            self.parent[x] = x
            self.rank[x] = 0

    def find(self, x: Any) -> Any:
        """Find root of x with path compression."""
        self._add(x)

        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]

    def union(self, a: Any, b: Any) -> None:
        """Union the sets containing a and b."""
        rootA = self.find(a)
        rootB = self.find(b)

        if rootA == rootB:
            return

        # Union by rank
        if self.rank[rootA] < self.rank[rootB]:
            self.parent[rootA] = rootB
        elif self.rank[rootA] > self.rank[rootB]:
            self.parent[rootB] = rootA
        else:
            self.parent[rootB] = rootA
            self.rank[rootA] += 1

    def connected(self, a: Any, b: Any) -> bool:
        """Check if two elements are in the same set."""
        if a not in self.parent or b not in self.parent:
            return False
        return self.find(a) == self.find(b)

    def group_members(self, x: Any) -> List[Any]:
        """Return all elements in the set containing x."""
        x_root = self.find(x)
        return [item for item in self.parent.keys() if self.find(item) == x_root]

    def all_groups(self) -> Dict[Any, List[Any]]:
        """Return all disjoint sets (for debugging/demo purposes)."""
        clusters: Dict[Any, List[Any]] = {}
        for element in self.parent.keys():
            root = self.find(element)
            clusters.setdefault(root, []).append(element)
        return clusters
