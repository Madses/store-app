import { useContext } from 'react';
import { CartContext } from '../contexts';

export default function useCart() {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (cartItem) => {
    if (!cartItem) return;
    setCart((prev) => {
      return [...prev, cartItem];
    });
  };

  const removeFromCart = (cartItem) => {
    if (!cartItem) return;
    const filteredCart = cart.filter((item) => item.id !== cartItem.id);
    setCart(filteredCart);
  };

  return { cart, addToCart, removeFromCart };
}
