"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { products } from '../data/products';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <main className="min-h-screen">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section from HTML */}
      <header className="bg-white py-16 border-b border-gray-100 relative">
        <div className="absolute top-4 right-8 text-xs font-black text-gray-400 tracking-wider">
          GSTIN: <span className="text-ex-blue">36CIZPK7957H1Z8</span>
        </div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-ex-blue mb-4 uppercase tracking-tighter">Product Catalogue</h1>
          <div className="w-24 h-1.5 bg-ex-green mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto italic text-sm border-l-4 border-ex-green pl-4 text-left md:text-center md:border-l-0">
            "Quality Excipients | Reliable Supplies | Stronger Partnerships"
          </p>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 py-10 bg-slate-50 overflow-x-auto px-6">
        {['All', 'Excipients', 'Colours', 'Specialty'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              filter === cat ? 'bg-ex-blue text-white shadow-lg' : 'bg-white text-ex-blue border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
