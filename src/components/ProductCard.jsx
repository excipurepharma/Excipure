"use client";
// Ensure "{ product }" is inside curly braces!
export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">
      <h3 className="font-bold">{product.name}</h3>
      <p>₹{product.price}</p>
      {/* ... the rest of your card code */}
    </div>
  );
}
