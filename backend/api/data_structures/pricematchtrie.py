class PriceMatchTrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.retailers = {}  # store_name -> offer_dict


class PriceMatchTrie:
    def __init__(self):
        self.root = PriceMatchTrieNode()

    def insert(self, product_name, store_name, price, shipping, link, in_store, online):
        """
        Insert a product offer into trie.
        product_name: full name of product, e.g., "iphone 17 pro"
        store_name: store string
        price, shipping: numbers
        link: URL
        in_store, online: booleans
        """
        node = self.root
        name = product_name.lower().strip()

        for char in name:
            if char not in node.children:
                node.children[char] = PriceMatchTrieNode()
            node = node.children[char]

        node.is_end_of_word = True

        # Store complete offer dictionary
        node.retailers[store_name] = {
            "store": store_name,
            "price": price,
            "shipping": shipping,
            "link": link,
            "inStore": in_store,
            "online": online,
        }

    def search(self, product_name):
        """
        Prefix search:
        - search("ip") matches "iphone 17 pro"
        - search("iphone 17") matches "iphone 17 pro"
        - search("iphone 17 pro") matches exactly
        """
        query = product_name.lower().strip()

        # Traverse down the trie as far as the query matches
        node = self.root
        for char in query:
            if char not in node.children:
                return None
            node = node.children[char]

        # Collect all retailers from this node downward
        results = self._collect_retailers(node)
        return results

    def _collect_retailers(self, node):
        """Recursively gather all offer dictionaries in subtree."""
        collected = {}

        if node.is_end_of_word:
            collected.update(node.retailers)

        # Recurse through children
        for child in node.children.values():
            child_results = self._collect_retailers(child)
            if child_results:
                collected.update(child_results)

        return collected
