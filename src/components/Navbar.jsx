"use client";
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-navy p-1.5 rounded-lg">
             <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-black text-brand-navy tracking-tighter">
            EXCIPURE
          </span>
        </div>

        {/* Cart Icon with Badge */}
        <button 
          onClick={onCartClick}
          className="relative p-2 text-brand-navy hover:bg-gray-100 rounded-full transition-colors"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
