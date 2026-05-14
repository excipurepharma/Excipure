const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Stock Badge */}
      <div className="flex justify-between items-start mb-3">
        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
          STOCK: {product.stock}+
        </span>
        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          {product.category}
        </span>
      </div>

      {/* Product Image Placeholder */}
      <div className="h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="max-h-full mix-blend-multiply" />
      </div>

      {/* Details */}
      <h3 className="font-bold text-gray-800 text-sm h-10 line-clamp-2">{product.name}</h3>
      
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-400 text-xs line-through">₹{product.oldPrice}</p>
          <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
        </div>
        
        {/* Add to Cart Button */}
        <button className="bg-[#002B44] text-white p-2 rounded-full hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
