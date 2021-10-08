import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import empty_cart from '../../assets/icons/undraw_empty_cart_co35.svg';

const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const toggleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? 'carts show' : 'carts';
  const show2 = menu ? 'cart show' : 'cart';

  const subtractAnItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty === 1 ? (item.qty = 1) : (item.qty -= 1);
      }
      setCart([...cart]);
    });
  };

  const addAnItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty += 1;
      }
      setCart([...cart]);
    });
  };

  console.log(cart);

  const handleClickDeleteItem = (id) => {
    if (window.confirm('Do you want to remove this product from your cart?')) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cart = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };
  return (
    <div className={show1}>
      <div className={`${show2} w-9/12 tablet:w-8/12 laptop:w-8/12 text-navy`}>
        <div className="cart__close" onClick={toggleFalse}>
          <i className="far fa-window-close"></i>
        </div>
        <h2>
          <i className="fas fa-shopping-cart text-4xl"></i>
        </h2>

        <div className="cart__center">
          {cart.length === 0 ? (
            <div className="flex flex-col mt-10 mb-10">
              <p className="text-center font-bold text-xl">
                Your shopping cart is empty
              </p>
              <img
                src={empty_cart}
                alt="hola"
                className="w-5/12 mx-auto laptop:w-4/12"
              />
            </div>
          ) : (
            <div>
              {cart.map((product) => {
                return (
                  <div className="cart__item" key={product.id}>
                    <img src={product.image.default} alt={product.title} />
                    <div className="p-2 flex flex-col justify-center">
                      <h3 className="text-md tablet:text-lg laptop:text-2xl font-bold">
                        {product.title}
                      </h3>
                      <p className="text-sm tablet:text-lg laptop:text-xl">
                        <span>$ </span>
                        {product.price}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center items-center text-xl laptop:text-2xl">
                      <i
                        className="far fa-caret-square-up p-2 cursor-pointer text-blue hover:text-navy"
                        onClick={() => addAnItem(product.id)}
                      ></i>
                      <p className="font-bold text-blue">{product.qty}</p>
                      <i
                        className="far fa-caret-square-down p-2 cursor-pointer text-blue hover:text-navy"
                        onClick={() => subtractAnItem(product.id)}
                      ></i>
                    </div>

                    <div className="flex items-center justify-center remove__item text-xl laptop:text-3xl">
                      <i
                        className="far fa-trash-alt cursor-pointer hover:text-crimson"
                        onClick={() => handleClickDeleteItem(product.id)}
                      ></i>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 w-10/12 mx-auto text-center">
                <h3 className="text-lg laptop:text-2xl font-bold p-3">
                  Total to pay: $ {total}
                </h3>
                <button className="bg-hoverligthnavy hover:bg-navy text-white px-6 mt-1 laptop:text-2xl laptop:py-2 laptop:px-8 laptop:font-bold">
                  Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
