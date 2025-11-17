Finalizing the data structures. Going to use a Trie for its easy usage with words because it can be 
helpful searching for product names. It will also support fast lookup when each character is input into a search bar.
The second data structure will be a Union-Find because it will help to group similar products together since based
on similar naming.

# Example
Apple Products

rie Data Structure in PriceMatch
Data Source

Product data is collected from multiple retailers (e.g., Amazon, Walmart, Target). Each entry contains a product name, retailer, and price.

Data Loading

The backend pulls data from files or APIs, processes it into (product_name, retailer, price) format, and loads it into the Trie for fast lookups.

Data Cleaning

Before insertion, product names are lowercased and stripped of extra spaces and punctuation. Prices are converted to numeric values for consistency.

Implemented Data Structure

The Trie stores product names character by character. Each complete word node maps to a dictionary of {retailer: price} pairs.
This allows:

Fast product name lookups

Efficient prefix matching for search or autocomplete

Easy handling of multiple retailers per product

Why Trie

A Trie provides faster prefix-based search than hash tables or binary trees. It’s simple, scalable, and ideal for matching and comparing product names.

Alternatives Considered
Structure	Reason Not Used
Hash Table	No support for prefix search
Binary Search Tree	Slower for string lookups
Suffix Array	More complex, unnecessary for prefix search
