class PriceMatchTrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.retailers = {}  # store_name -> price


class PriceMatchTrie:
    def __init__(self):
        self.root = PriceMatchTrieNode()

    def insert(self, product_name, store_name, price):
        node = self.root
        for char in product_name.lower():
            if char not in node.children:
                node.children[char] = PriceMatchTrieNode()
            node = node.children[char]
        node.is_end_of_word = True
        node.retailers[store_name] = price

    def search(self, product_name):
        node = self.root
        for char in product_name.lower():
            if char not in node.children:
                return None
            node = node.children[char]
        return node.retailers if node.is_end_of_word else None


if __name__ == "__main__":
    trie = PriceMatchTrie()
    trie.insert("iPhone 17 Pro", "Amazon", 949.99)
    trie.insert("iPhone 17 Pro", "BestBuy", 999.99)
    trie.insert("Samsung Galaxy S24", "Target", 899.99)
    trie.insert("Samsung Galaxy S24", "Walmart", 879.99)

    print(trie.search("iPhone 15 Pro"))
    print(trie.search("Samsung Galaxy S24"))
    print(trie.search("Pixel 9 Pro"))
