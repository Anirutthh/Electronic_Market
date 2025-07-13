import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const handleAddToCart = (price) => {
    setCartCount(cartCount + 1);
    setCartValue(cartValue + price);
  };

  return (
    <div>
      <header className="header">
        <h1>⚡ Electronic Sale ⚡</h1>
        <div className="cart-count">
          🛒 Cart: {cartCount} items | ₹{cartValue.toLocaleString()}
        </div>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, brand, type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
          <option value="Smartwatch">Smartwatch</option>
          <option value="Earbuds">Earbuds</option>
          <option value="Gaming Console">Gaming Console</option>
          <option value="Mirrorless Camera">Mirrorless Camera</option>
          <option value="Hair Styler">Hair Styler</option>
          <option value="Streaming Device">Streaming Device</option>
          <option value="Drone">Drone</option>
          <option value="Grooming Device">Grooming Device</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      <div className="checkout-bar">
  <h2>🛒 Cart Summary</h2>
  <p>Items in Cart: {cartCount}</p>
  <p>Total Amount: ₹{cartValue.toLocaleString()}</p>
  <button
    className="checkout-btn"
    onClick={() => {
      if (cartCount === 0) {
        alert("Your cart is empty! Please add some products.");
      } else {
        alert(`Order placed successfully! 🎉\nItems: ${cartCount}\nTotal: ₹${cartValue.toLocaleString()}`);
      }
    }}
  >
    Proceed to Checkout
  </button>
</div>


      <ProductList
        searchTerm={searchTerm}
        filterType={filterType}
        sortOrder={sortOrder}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
