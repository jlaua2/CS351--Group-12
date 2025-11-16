from .data_structures import PriceMatchTrie

price_trie = PriceMatchTrie()

# TODO: Replace these with scraped or API data later
# place holder products
price_trie.insert(
    "iPhone 17 Pro", "Amazon",
    price=949.99, shipping=0.0,
    link="https://amazon.com/iphone-17-pro",
    in_store=False, online=True,
)

price_trie.insert(
    "iPhone 17 Pro", "BestBuy",
    price=999.99, shipping=9.99,
    link="https://bestbuy.com/iphone-17-pro",
    in_store=True, online=True,
)

price_trie.insert(
    "Samsung Galaxy S24", "Target",
    price=899.99, shipping=5.99,
    link="https://target.com/galaxy-s24",
    in_store=True, online=True,
)

price_trie.insert(
    "Samsung Galaxy S24", "Walmart",
    price=879.99, shipping=0.0,
    link="https://walmart.com/galaxy-s24",
    in_store=True, online=True,
)
