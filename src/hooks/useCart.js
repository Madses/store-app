import { useContext } from 'react';
import { CartContext } from '../contexts';

export default function useCart() {
  const [cart, setCart] = useContext(CartContext);

  const cartCount = cart.length;

  const addToCart = (cartItem) => {
    if (!cartItem) return;
    setCart((prev) => {
      return [...prev, cartItem];
    });
  };

  const removeFromCart = (cartItem) => {
    if (!cartItem) return;
    const cartCopy = [...cart];
    const toRemoveIndex = cartCopy.indexOf(cartItem);
    if (toRemoveIndex === -1) return;
    cartCopy.splice(toRemoveIndex, 1);
    setCart(cartCopy);
  };

  return { cartCount, cart, addToCart, removeFromCart };
}
