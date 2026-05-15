"use client";
import { useCart } from '../context/CartContext';
import { CheckCircle, Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-6 rounded-3xl border-l-8 border-ex-green shadow-sm card-hover flex flex-col justify-between h-full">
      <div>
        <div className="text-[10px] font-black text-ex-green mb-2 uppercase tracking-widest">
          ID: {product.id}
        </div>
        <h4 className="font-black text-ex-blue mb-4 uppercase text-sm leading-tight h-10 flex items-center">
          {product.name}
        </h4>
        <div className="space-y-2 text-[12px] text-gray-600">
          <p><span className="text-gray-400 font-bold uppercase text-[10px]">Usage:</span> {product.category}</p>
          <div className="pt-3 border-t mt-3 text-ex-green italic font-black flex items-center gap-2">
            <CheckCircle size={14} /> {product.stock > 0 ? 'High Purity' : 'Specialty'}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-black text-ex-blue">₹{product.price}</span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-ex-blue text-white p-2 rounded-full shadow-md hover:bg-opacity-90 transition active:scale-90"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
