import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import roca from '../assets/icons/roca.svg';
import { DataContext } from '../context/DataProvider';

const Navbar = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart;

  const toggleTrue = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-navy text-grey">
      <div className="container mx-auto flex">
        <div className="w-3/12 flex p-1 tablet:p-3">
          <img src={roca} alt="rock&tsirt" className="logo" />
          <Link to="/products" className="text-yellow text-sm tablet:text-3xl">
            <p>
              Rock <span className="font-bold text-grey">&</span>
            </p>
            <p>Tshirt</p>
          </Link>
        </div>

        <div className="w-6/12 flex justify-around font-bold items-center text-2xl tablet:text-4xl">
          <Link to="/products" className="select">
            Products
          </Link>
        </div>

        <div className="w-3/12 flex justify-center items-center">
          <div className="flex cursor-pointer" onClick={toggleTrue}>
            <i className="fas fa-cart-plus text-2xl tablet:text-5xl laptop:text-4xl"></i>
            <span className="item__total text-xl ml-2 tablet:text-3xl laptop:text-2xl">
              {cart.length > 9 ? '9+' : cart.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
