import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/shoes').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return [products, setProducts];
}
