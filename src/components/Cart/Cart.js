import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let sum=0;
    for(const item of cart){
        sum=sum+item.price;
    }
    const tax=(sum*.1);
    const total=sum+tax;
    
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered :{cart.length}</p>
            <p>Items Prices :${sum.toFixed(4)}</p>
            <p>Total Tax :${tax.toFixed(4)}</p>
            <p className='total-order'>Total Order :${total.toFixed(4)}</p>
        </div>
    );
};

export default Cart;