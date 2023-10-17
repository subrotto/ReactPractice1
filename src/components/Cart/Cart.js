import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let sum=0;
    let len=0;
    for(const item of cart){
        if(!item.quantity){
            item.quantity=1;
        }
        sum=sum+(item.quantity*item.price);
        len=len+item.quantity;
    }
    const tax=(sum*.1);
    const total=sum+tax;
    
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered :{len}</p>
            <p>Items Prices :${sum.toFixed(4)}</p>
            <p>Total Tax :${tax.toFixed(4)}</p>
            <p className='total-order'>Total Order :${total.toFixed(4)}</p>
        </div>
    );
};

export default Cart;