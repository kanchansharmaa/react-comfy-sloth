import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import {Auth0Provider} from '@auth0/auth0-react'
import { UserProvider } from './context/user_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  redirectUri={window.location.origin}
  cacheLocation="localstorage"
  >
    <UserProvider>
       <ProductsProvider>
      <FilterProvider>
        <CartProvider>
           <App />
         </CartProvider>
    </FilterProvider>
    </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();




//  pk_test_51M62SwSEHb3iRo5Gn6UfRV9CVlqpCfC9oc49oDWMoEmh0DRgRgKnlUNbd6AFMC7KytwMvJpTGVZY14ZpTQQ6XNMX00YQOIwKny
// sk_test_51M62SwSEHb3iRo5GrZPSuwTOkM3ZJPsoyb93qpULYdxzaKzKR0bBtV5zmd2L5AFpjXLHbX1WifR1gwAAvNhbM6b200w4R17j9r

