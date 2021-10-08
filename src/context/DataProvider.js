import { createContext, useEffect, useState } from 'react';
import data from '../assets/data/data';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const product = data.items;
    if (product) {
      setProducts(product);
    } else {
      setProducts([]);
    }

    setProducts(product);
  }, []);

  const addItemtoCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert('el producto ya ah sido agregado al carrito');
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));

    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.qty;
      }, 0);
      setTotal(res.toFixed(2));
    };
    getTotal();
  }, [cart]);

  const value = {
    products: [products],
    menu: [menu, setMenu],
    addItemtoCart: addItemtoCart,
    cart: [cart, setCart],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
