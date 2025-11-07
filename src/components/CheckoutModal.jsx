import React from 'react';

export default function CheckoutModal({ receipt, onClose }) {
  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-gray-700 transform transition-all scale-100 hover:scale-[1.02]">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
          🧾 Payment Receipt
        </h2>

        {/* Details */}
        <div className="space-y-2 text-gray-300 mb-6">
          <div>
            <strong className="text-pink-400">Receipt ID:</strong> {receipt.id}
          </div>
          <div>
            <strong className="text-pink-400">Name:</strong> {receipt.name}
          </div>
          <div>
            <strong className="text-pink-400">Total:</strong> ₹ {receipt.total}
          </div>
          <div>
            <strong className="text-pink-400">Time:</strong>{" "}
            {new Date(receipt.timestamp).toLocaleString()}
          </div>
        </div>

        {/* Items List */}
        <ul className="space-y-2 border-t border-gray-700 pt-4 mb-6 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500/50">
          {receipt.items.map((it, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-800/60 px-3 py-2 rounded-lg text-sm"
            >
              <span className="text-gray-200">
                {it.product} — {it.qty} × ₹{it.price}
              </span>
              <span className="text-indigo-400 font-semibold">₹{it.lineTotal}</span>
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg 
                       hover:from-pink-400 hover:to-purple-500 hover:shadow-pink-500/40 
                       transition-transform transform hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
