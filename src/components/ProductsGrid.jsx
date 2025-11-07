
export default function ProductsGrid({ products = [], onAdd }) {
  return (
   <section className="products py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-lg">
      ✨ Our Premium Products ✨
    </h2>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <div
          key={p._id}
          className="group relative bg-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/30 transition-all duration-300"
        >
          {/* Card Body */}
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-pink-400 mb-2 group-hover:text-pink-300 transition">
              {p.name}
            </h3>
            <p className="text-gray-300 flex-1 leading-relaxed mb-4">
              {p.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <strong className="text-xl font-bold text-indigo-400">
                ₹ {p.price}
              </strong>
             <button
  type="button"
  onClick={() => {
    console.log("🔥 Button Clicked!");
    alert(`✅ Added to cart: ${p.name}`);
    onAdd(p._id);
  }}
  className="relative z-10 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:from-pink-400 hover:to-purple-500 hover:shadow-pink-500/40 transition-transform transform hover:scale-105 active:scale-95"
>
  Add to Cart
</button>


            </div>
          </div>

          {/* Glow Hover Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 blur-2xl transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
