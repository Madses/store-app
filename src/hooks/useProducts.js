import { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../contexts';
import axios from 'axios';

export default function useProducts(searchQuery) {
  const [products, setProducts] = useContext(ProductContext);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`/shoes?q=${searchQuery ? searchQuery : ''}`)
      .then((res) => {
        setProducts(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchQuery, setProducts]);

  return { products, isLoading };
}
