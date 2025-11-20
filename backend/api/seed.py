# backend/api/seed.py

from api.models import ProductResult

DEMO_PRODUCTS = [
    # Smartphones
    "iPhone 15",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
    "iPhone 14",
    "iPhone 13",
    "Samsung Galaxy S23",
    "Samsung Galaxy S23 Ultra",
    "Samsung Galaxy A54",
    "Google Pixel 8",
    "Google Pixel 7a",
    "OnePlus 11",
    "Motorola Edge+",
    # Laptops
    "MacBook Air M2",
    "MacBook Pro 14-inch",
    "MacBook Pro 16-inch",
    "Dell XPS 13",
    "HP Spectre x360",
    "Lenovo Legion 5 Pro",
    "ASUS ROG Strix G16",
    # Headphones
    "AirPods Pro (2nd Gen)",
    "Sony WH-1000XM5",
    "Bose QuietComfort 45",
    "Beats Studio Pro",
    "Samsung Galaxy Buds 2 Pro",
    # Consoles
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch OLED",
    "Steam Deck 512GB",
    # Smart Home
    "Amazon Echo Dot (5th Gen)",
    "Google Nest Hub",
    "Ring Video Doorbell Wired",
    "Philips Hue Smart Bulb 4-pack",
    # TVs
    'Samsung 55" QLED 4K TV',
    'LG C3 OLED 55"',
    "Sony Bravia XR A80L",
]

STORES = [
    "Best Buy",
    "Walmart",
    "Target",
    "Amazon",
    "Costco",
    "GameStop",
    "B&H Photo",
    "Newegg",
]

import random


def run():
    """Populate the database with demo product results."""
    print("🌱 Seeding database with demo products...")

    for title in DEMO_PRODUCTS:
        for _ in range(2):  # insert 2 store variations per product
            ProductResult.objects.create(  # type: ignore
                query=title.split()[0].lower(),  # e.g., "iphone"
                store=random.choice(STORES),
                title=title,
                price=round(random.uniform(49, 2499), 2),  # fake realistic price
                shipping=round(random.uniform(0, 20), 2),
                link="https://example.com/product",  # placeholder
                in_store=bool(random.getrandbits(1)),
                online=True,
            )

    print("Done! Seed data inserted.")
