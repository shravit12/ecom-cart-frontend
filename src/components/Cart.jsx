import React, { useState } from 'react';

export default function Cart({ cart = { items: [], total: 0 }, onRemove, onCheckoutForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <aside className="cart bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto md:mx-0 backdrop-blur-xl">
  <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
    🛒 Your Cart
  </h2>

  {cart.items.length === 0 ? (
    <p className="text-gray-400 text-center italic">Your cart is empty 😢</p>
  ) : (
    <>
      {/* Cart Items */}
      <ul className="divide-y divide-gray-700 mb-6">
        {cart.items.map((item) => (
          <li
            key={item.id}
            className="cart-item flex justify-between items-center py-4 px-2 hover:bg-gray-800/50 rounded-xl transition duration-200"
          >
            <div>
              <strong className="text-pink-400 text-lg block">{item.product.name}</strong>
              <div className="text-gray-300 text-sm">Qty: {item.qty}</div>
              <div className="text-gray-400 text-sm">Line: ₹ {item.lineTotal}</div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-lg font-semibold hover:from-red-400 hover:to-pink-500 hover:shadow-pink-500/30 transition-all transform hover:scale-105 active:scale-95"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="cart-total text-xl font-semibold text-center mb-8">
        <span className="text-gray-300">Total:</span>{" "}
        <strong className="text-indigo-400">₹ {cart.total}</strong>
      </div>

      {/* Checkout Form */}
      <div className="checkout-form bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-inner">
        <h3 className="text-2xl font-bold mb-4 text-center text-pink-400">Checkout</h3>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <input
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button
          onClick={() => onCheckoutForm(name, email)}
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold py-3 rounded-xl hover:from-indigo-400 hover:to-pink-400 shadow-lg hover:shadow-pink-500/40 transition-transform transform hover:scale-105 active:scale-95"
        >
          Pay (Mock)
        </button>
      </div>
    </>
  )}
</aside>

  );
}
