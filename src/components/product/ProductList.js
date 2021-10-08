import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import ProductItem from './ProductItem';

const ProductList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4">
      {/* Card */}

      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            qty={product.qty}
          />
        );
      })}

      {/* Card */}
    </div>
  );
};

export default ProductList;
