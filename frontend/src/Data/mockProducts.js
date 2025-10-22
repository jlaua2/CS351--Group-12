export const mockProducts = [
    {
      id: 1,
      name: "Nintendo Switch Console",
      store: "GameStop",
      price: 299.99,
      shipping: 10.00,
      online: true,
      inStore: true,
      link: "https://gamestop.com/nintendo-switch",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      store: "Target",
      price: 305.00,
      shipping: 0.00,
      online: true,
      inStore: true, // Assuming online order with in-store pickup is possible
      link: "https://target.com/nintendo-switch",
    },
    {
      id: 3,
      name: "Nintendo Switch Console (Used)",
      store: "eBay",
      price: 280.00,
      shipping: 15.00,
      online: true,
      inStore: false,
      link: "https://ebay.com/nintendo-switch-used",
    },
    // Add more products for testing sorting and filtering...
  ];