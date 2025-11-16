from .data_structures.pricematchtrie import PriceMatchTrie

price_trie = PriceMatchTrie()

# Insert demo products
price_trie.insert(
    "iphone 15",
    "Walmart",
    699.99,
    10.00,
    "https://walmart.com/iphone15",
    True,
    True
)

price_trie.insert(
    "iphone 15 case",
    "Target",
    19.99,
    4.99,
    "https://target.com/iphone15case",
    True,
    True
)

price_trie.insert(
    "samsung galaxy s23",
    "Amazon",
    599.99,
    0.00,
    "https://amazon.com/s23",
    False,
    True
)
