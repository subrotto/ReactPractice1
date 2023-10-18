import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    
    const {name,price,stock,img,seller,star}=props.product;
    const btnIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
            <h3 className='product-name'>{name}</h3>
            <p><small>By : {seller}</small></p>
            <p>Price :${price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating readonly emptySymbol="fa fa-star-o icon"
  fullSymbol="fa fa-star icon" initialRating={star}></Rating>
            <br />
            <button  onClick={()=>props.handleAddCart(props.product)}  className='btn-regular'>{btnIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;