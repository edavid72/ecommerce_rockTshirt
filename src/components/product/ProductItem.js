import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const ProductItem = ({ id, title, price, image, category, qty }) => {
  const value = useContext(DataContext);
  const addItemtoCart = value.addItemtoCart;

  return (
    <div className="p-4 m-4">
      <Link to={`/product/${id}`} className="w-full">
        <img src={image.default} alt={title} />
      </Link>

      <h2 className="font-bold text-lg text-navy text-center">{title}</h2>
      <p className="text-lg text-ligthnavy text-center">
        <span>$ </span>
        {price}
      </p>

      <div className="flex justify-around mt-2">
        <Link
          to={`/product/${id}`}
          className="py-1 px-3 bg-ligthnavy text-white text-xl hover:bg-hoverligthnavy"
        >
          Quick View
        </Link>

        <button
          className="py-1 px-3 bg-yellow text-navy text-xl hover:bg-hoveryellow"
          onClick={() => addItemtoCart(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
