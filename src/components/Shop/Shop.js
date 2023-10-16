import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    
    const handleAddCart=(product)=>{
       const newCart=[...cart,product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               
                {
                    products.map(product=><Product
                        handleAddCart={handleAddCart}
                        key={product.key} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;