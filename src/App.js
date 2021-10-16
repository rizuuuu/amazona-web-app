import React from 'react';
import data from './data';
import Product from './components/product';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <marquee className="announcment_bar">UPTO 70% 'OFF' on every product for 7 days!!</marquee>
    <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/"><img src="logo.png" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/cart">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">SignIn</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
          <div className="row">
            {
              data.products.map(product => (  
                <Product key={product._id} product={product}></Product>
              ))
            }
      </div>
  </div>
  </div>
  </BrowserRouter>
      );
}

export default App;
