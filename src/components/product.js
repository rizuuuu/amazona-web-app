import React from 'react';
import Rating from './Rating';

export default function Product(props){
    const {product} = props;
    return(
    <div key={product._id} className="col-lg-3 mt-3 mb-2">
    <div className="card">
    <a href={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" alt="..." />
     </a>
        <div className="card-body">
          <h4 className="card-title product_name font-weight-bold">{product.product_name}</h4>
          <h5 className="card-title font-weight-bold product_price">${product.price} <span className="pprice">({product.price_off} OFF)</span></h5>
          <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          <p className="card-text font-weight-bold">
            {product.category}
          </p>
          <p className="card-text">
            {product.description}
          </p>
          <a href="#" className="btn btn-success">Add to cart</a>
        </div>
  </div>
</div>

)
}