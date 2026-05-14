"use client";
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">
      {/* ... (rest of your card code) ... */}
      <button 
        onClick={() => addToCart(product)}
        className="bg-[#002B44] text-white p-2 rounded-full hover:bg-brand-green transition-colors">
        +
      </button>
    </div>
  );
}
