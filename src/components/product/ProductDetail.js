import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../../context/DataProvider';

const ProductDetail = ({ history }) => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [details, setDetails] = useState([]);
  const params = useParams();
  const addItemtoCart = value.addItemtoCart;

  console.log(history);

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === parseInt(params.id)) {
        setDetails(product);
      }
    });
  }, [params.id, products.id]);

  const handleClickgoBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="mt-2 text-navy p-4">
        <button onClick={handleClickgoBack} className="mb-4">
          <i className="fas fa-arrow-left text-3xl text-ligthnavy tablet:text-4xl"></i>
        </button>
        <h2 className="text-4xl font-bold tablet:text-5xl">{details.title}</h2>
        <p className="text-2xl mb-2 tablet:text-4xl">
          $ <span>{details.price}</span>
        </p>

        <div>
          <p className="bg-celeste text-yellow w-2/12 text-lg text-center font-bold laptop:w-1/12 laptop:text-3xl laptop:py-1 mb-2 tablet:text-4xl">
            New
          </p>

          <div className="mb-3">
            <p className="text-2xl tablet:text-3xl">a Size</p>
            <select placeholder="a Size" className="text-lg tablet:text-2xl">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
              <option value="xx-large">Xx-Large</option>
            </select>
          </div>
        </div>
        <button
          className="bg-yellow text-navy text-xl px-2 tablet:text-3xl"
          onClick={() => addItemtoCart(details.id)}
        >
          Add to cart
        </button>

        <img src={details.img1} alt={details.title} className="w-12/12 laptop:w-3/12 laptop:mt-4 laptop:p-4" />

        <p className="font-bold text-md text-justify mt-3 tablet:text-2xl">
          description: <span className="font-light">{details.description}</span>
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
