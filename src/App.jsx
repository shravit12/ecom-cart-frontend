import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCart, addToCart, deleteCartItem, checkout } from './api';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';

export default function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [checkoutReceipt, setCheckoutReceipt] = useState(null);

  const loadProducts = async () => {
    const data = await fetchProducts();
    console.log("✅ Products fetched:", data);
    setProducts(data);
  };
  const loadCart = async () => {
    const data = await fetchCart();
    setCart(data);
  };

useEffect(() => {
  // 🟢 Step 1: Warm-up Render backend (prevents 10s delay)
  fetch("https://ecom-cart-backend-ne5v.onrender.com/api/products")
    .then(() => console.log("🚀 Backend woken up!"))
    .catch(() => console.log("⚠️ Wake-up request failed"));

  // 🟣 Step 2: Load products and cart after warm-up trigger
  loadProducts();
  loadCart();
}, []);


  const handleAdd = async (productId) => {
    await addToCart(productId, 1);
    await loadCart();
  };

  const handleRemove = async (cartItemId) => {
    await deleteCartItem(cartItemId);
    await loadCart();
  };

  const handleCheckout = async (name, email) => {
    // prepare cartItems as array of { id }
    const items = cart.items.map(i => ({ id: i.id }));
    const res = await checkout(items, name, email);
    if (res.success) {
      setCheckoutReceipt(res.receipt);
      setCart({ items: [], total: 0 });
    } else {
      alert('Checkout failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  {/* Header */}
  <header className="py-6 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-center">
    <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
      Vibe Commerce <span className="text-yellow-300">— Mock Cart</span>
    </h1>
  </header>

  {/* Main Content */}
  <main className="flex flex-col md:flex-row flex-1 gap-8 p-8">
    {/* Products Section */}
    <section className="flex-1 bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-300 border-b border-gray-600 pb-2">
        🛍️ Products
      </h2>
      <ProductsGrid
        products={products}
        onAdd={handleAdd}
      />
    </section>

    {/* Cart Section */}
    <aside className="w-full md:w-1/3 bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-pink-300 border-b border-gray-600 pb-2">
        🛒 Your Cart
      </h2>
      <Cart
        cart={cart}
        onRemove={handleRemove}
        onCheckoutClick={() => {}}
        onCheckoutForm={handleCheckout}
      />
    </aside>
  </main>

  {/* Checkout Modal */}
  {checkoutReceipt && (
    <CheckoutModal
      receipt={checkoutReceipt}
      onClose={() => setCheckoutReceipt(null)}
    />
  )}

  {/* Footer */}
  <footer className="py-4 text-center text-gray-400 border-t border-gray-800 mt-6">
    <p className="text-sm">
      © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Vibe Commerce</span>. All rights reserved.
    </p>
  </footer>
</div>

  );
}
