"use client";
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // This connects to the "Brain"

  return (
    <div className="bg-white p-6 rounded-3xl border-l-8 border-ex-green shadow-sm card-hover flex flex-col justify-between h-full">
      {/* ... (Your card info) ... */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-black text-ex-blue">₹{product.price}</span>
        
        {/* FIX: Ensure onClick is present and calls addToCart */}
        <button 
          onClick={() => {
            console.log("Adding to cart:", product.name);
            addToCart(product);
          }}
          className="bg-ex-blue text-white p-2 rounded-full shadow-md hover:bg-opacity-90 transition active:scale-90"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
