import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../../context/DataProvider';

const ProductDetail = ({ history }) => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [details, setDetails] = useState([]);
  const params = useParams();
  const addItemtoCart = value.addItemtoCart;

  /* console.log(history); */

  useEffect(() => {
    products.forEach((product) => {
      if (product.id === parseInt(params.id)) {
        setDetails(product);
      }
    });
  }, [params.id, products.id, products]);

  const handleClickgoBack = () => {
    history.goBack();
  };

  return (
    <div className="container mx-auto">
      <div className="mt-2 text-navy p-4">
        <button onClick={handleClickgoBack} className="mb-4">
          <i className="fas fa-arrow-left text-3xl text-ligthnavy tablet:text-4xl"></i>
        </button>
        <h2 className="text-4xl font-bold tablet:text-5xl mt-6">
          {details.title}
        </h2>
        <p className="text-2xl mb-2 tablet:text-4xl">
          $ <span>{details.price}</span>
        </p>

        <div>
          <p className="bg-celeste text-yellow w-2/12 text-lg text-center font-bold laptop:w-1/12 laptop:text-3xl laptop:py-1 mb-2 tablet:text-4xl rounded-3xl py-1">
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

        <div className="grid laptop:grid-cols-2 mt-6">
          <img
            src={details.img1}
            alt={details.title}
            className="w-12/12 laptop:w-10/12"
          />

          <div className="p-4">
            <h3 className="text-2xl font-bold p-3 tablet:text-3xl">Product characteristics:</h3>
            <ul className="text-lg tablet:text-2xl">
              <li className="list-disc">{details.characteristics01}</li>
              <li className="list-disc">{details.characteristics02}</li>
              <li className="list-disc">{details.characteristics03}</li>
              <li className="list-disc">{details.characteristics04}</li>
              <li className="list-disc">{details.characteristics05}</li>
            </ul>
          </div>
        </div>
        <p className="font-bold text-justify mt-6 text-2xl tablet:text-3xl">
          description: <span className="font-light text-xl tablet:text-2xl">{details.description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
