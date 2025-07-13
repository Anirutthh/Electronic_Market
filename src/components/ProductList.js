import "./ProductList.css";

function ProductList({ searchTerm, filterType, sortOrder, onAddToCart }) {
  const products = [
    { id: 1, name: "iPhone 15 Pro Max", brand: "Apple", price: 159900, type: "Smartphone" },
    { id: 2, name: "Galaxy M14", brand: "Samsung", price: 12999, type: "Smartphone" },
    { id: 3, name: "PlayStation 5", brand: "Sony", price: 54990, type: "Gaming Console" },
    { id: 4, name: "Redmi Note 13", brand: "Xiaomi", price: 13999, type: "Smartphone" },
    { id: 5, name: "Echo Dot (5th Gen)", brand: "Amazon", price: 4999, type: "Smart Speaker" },
    { id: 6, name: "MacBook Air M3", brand: "Apple", price: 129900, type: "Laptop" },
    { id: 7, name: "ASUS Vivobook 16X", brand: "ASUS", price: 51990, type: "Laptop" },
    { id: 8, name: "Fire TV Stick 4K Max", brand: "Amazon", price: 6499, type: "Streaming Device" },
    { id: 9, name: "Samsung Galaxy Watch 6", brand: "Samsung", price: 29999, type: "Smartwatch" },
    { id: 10, name: "JBL Flip 6", brand: "JBL", price: 9999, type: "Bluetooth Speaker" },
    { id: 11, name: "AirPods Pro (2nd Gen)", brand: "Apple", price: 24900, type: "Earbuds" },
    { id: 12, name: "boAt Airdopes 141", brand: "boAt", price: 1199, type: "Earbuds" },
    { id: 13, name: "Dyson Airwrap Styler", brand: "Dyson", price: 45900, type: "Hair Styler" },
    { id: 14, name: "Realme Buds Wireless 3", brand: "Realme", price: 1599, type: "Neckband" },
    { id: 15, name: "Canon EOS R50", brand: "Canon", price: 84990, type: "Mirrorless Camera" },
    { id: 16, name: "Logitech MX Master 3S", brand: "Logitech", price: 10995, type: "Wireless Mouse" },
    { id: 17, name: "Dell Ultrasharp U2723QE", brand: "Dell", price: 59999, type: "4K Monitor" },
    { id: 18, name: "OnePlus Nord CE 4", brand: "OnePlus", price: 24999, type: "Smartphone" },
    { id: 19, name: "Samsung 55” QLED 4K TV", brand: "Samsung", price: 84999, type: "Smart TV" },
    { id: 20, name: "Mi Smart LED Bulb", brand: "Xiaomi", price: 699, type: "Smart Bulb" },
    { id: 21, name: "Apple Watch Ultra 2", brand: "Apple", price: 89900, type: "Smartwatch" },
    { id: 22, name: "HP DeskJet 2331 Printer", brand: "HP", price: 4199, type: "Printer" },
    { id: 23, name: "Noise ColorFit Pulse 2", brand: "Noise", price: 1299, type: "Smartwatch" },
    { id: 24, name: "Sony WH-1000XM5", brand: "Sony", price: 29990, type: "Headphones" },
    { id: 25, name: "boAt Stone 350", brand: "boAt", price: 1299, type: "Bluetooth Speaker" },
    { id: 26, name: "Philips Beard Trimmer", brand: "Philips", price: 1699, type: "Grooming Device" },
    { id: 27, name: "Anker PowerCore 20000mAh", brand: "Anker", price: 3299, type: "Power Bank" },
    { id: 28, name: "Zebronics ZEB-K35 KB", brand: "Zebronics", price: 849, type: "Keyboard" },
    { id: 29, name: "Cosmic Byte G2050 Mouse", brand: "Cosmic Byte", price: 1899, type: "Gaming Mouse" },
    { id: 30, name: "DJI Mini 4 Pro Drone", brand: "DJI", price: 144990, type: "Drone" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "All" || product.type === filterType;

    return matchesSearch && matchesType;
  });

  const sortedProducts = [...filteredProducts];
  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="product-list">
      {sortedProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Price:</strong> ₹{product.price.toLocaleString()}</p>
          <button onClick={() => onAddToCart(product.price)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
