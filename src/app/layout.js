import './globals.css'; // Path must be exact!
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
