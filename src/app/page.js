import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-black text-[#002B44]">EXCIPURE</h1>
        <p className="text-gray-500">High Quality Pharmaceutical Raw Materials</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
