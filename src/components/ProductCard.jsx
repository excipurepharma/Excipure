"use client";
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
            In Stock
          </span>
          <span className="text-[10px] text-gray-400 font-medium uppercase">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-bold text-slate-800 text-sm leading-snug mb-1">
          {product.name}
        </h3>
        <p className="text-[10px] text-gray-400 mb-4 italic">High Purity Grade</p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex flex-col">
          <span className="text-gray-300 text-[10px] line-through font-medium">
            ₹{(product.price * 1.1).toFixed(0)}
          </span>
          <span className="text-lg font-black text-slate-900 leading-none">
            ₹{product.price}
          </span>
        </div>
        
        <button 
          onClick={() => addToCart(product)}
          className="bg-[#002B44] text-white p-2.5 rounded-xl hover:bg-emerald-600 active:scale-90 transition-all shadow-lg shadow-blue-900/10"
        >
          <Plus size={18} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
