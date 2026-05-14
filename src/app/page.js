"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { products } from '../data/products';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  // Filter logic
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['All', 'Excipients', 'Solvents', 'Others'];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <section className="px-6 py-10 text-center">
        <h1 className="text-4xl font-black text-brand-navy mb-2">EXCIPURE</h1>
        <p className="text-gray-500">High Quality Pharmaceutical Raw Materials</p>
      </section>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-8 overflow-x-auto px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              filter === cat 
              ? 'bg-brand-navy text-white' 
              : 'bg-white text-gray-500 border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
