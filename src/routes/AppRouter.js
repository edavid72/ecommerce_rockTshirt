import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/product/ProductDetail';
import { DataProvider } from '../context/DataProvider';
import Home from '../views/Home';
import Products from '../views/Products';

const AppRouter = () => {
  return (
    <DataProvider>
      <Router>
        <div>
          <Navbar />
          <Cart />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:id" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
};

export default AppRouter;
