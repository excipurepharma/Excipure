"use client";
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO FIX */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Excipure Pharma" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
               e.target.style.display='none';
               document.getElementById('text-logo').style.display='block';
            }}
          />
          <div id="text-logo" className="hidden">
            <span className="text-xl font-black text-ex-blue">EXCIPURE</span>
          </div>
        </div>

        {/* CART BUTTON FIX */}
        <button onClick={onCartClick} className="relative p-2 text-ex-blue">
          <ShoppingCart size={28} />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-ex-green text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
