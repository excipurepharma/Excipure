"use client";
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, totalPrice } = useCart();

  const sendWhatsApp = () => {
    const phone = "919398453760"; // Double check your number!
    
    // Create the message string
    const itemDetails = cart.map(item => 
      `*${item.name}*%0AQty: ${item.quantity}%0APrice: ₹${item.price * item.quantity}`
    ).join('%0A%0A');

    const message = `*NEW ORDER FROM EXCIPURE*%0A%0A${itemDetails}%0A%0A*Total Amount: ₹${totalPrice}*`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Sidebar Panel */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-ex-blue">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 mt-20">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="border-b py-4 flex justify-between">
                <div>
                  <p className="font-bold text-sm text-ex-blue">{item.name}</p>
                  <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        {/* WhatsApp Button */}
        <div className="mt-auto pt-6">
          <div className="flex justify-between text-xl font-black mb-4">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button 
            disabled={cart.length === 0}
            onClick={sendWhatsApp}
            className="w-full bg-ex-green text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-opacity-90 disabled:bg-gray-300 transition-all"
          >
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
