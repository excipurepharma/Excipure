"use client";
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, totalPrice } = useCart();

  const sendWhatsApp = () => {
    const phone = "919398453760"; 
    const items = cart.map(i => `${i.name} x${i.quantity}`).join('%0A');
    const msg = `*New Order from Excipure*%0A%0A${items}%0A%0A*Total: ₹${totalPrice}*`;
    window.open(`https://wa.me/${phone}?text=${msg}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-80 bg-white h-full shadow-xl p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="flex-1 overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between border-b py-2 text-sm">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span><span>₹{totalPrice}</span>
          </div>
          <button 
            onClick={sendWhatsApp}
            className="w-full bg-brand-green text-white py-3 rounded-xl font-bold">
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
