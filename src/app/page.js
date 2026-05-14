"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { products } from '../data/products';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <header className="px-6 py-8">
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">EXCIPURE</h1>
        <p className="text-slate-500 text-sm">High Quality Pharmaceutical Raw Materials</p>
      </header>

      {/* Category Scroller */}
      <div className="flex gap-2 overflow-x-auto px-6 mb-6 no-scrollbar">
        {['All', 'Excipients', 'Solvents', 'Others'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filter === cat ? 'bg-brand-navy text-white' : 'bg-white text-slate-400 border border-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The 2-Column Mobile Grid */}
      <div className="px-4 pb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
