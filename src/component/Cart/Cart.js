import React from 'react';
//IMPORT FONT AWSOME 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//CSS FILE
import './Cart.css'

//CART ICON NAMING
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Cart = (props) => {

    //DESCTRUCTURING OBJECT
    const { cart } = props

    //SETTING INITIAL TOTAL QUANTITY
    let totalQuantity = 0;

    //SETTING INITIAL TOTAL PRICE
    let totalPrice = 0;


    //LOOPING THE CART ARRAY 
    for (const car of cart) {
        // SETTING VALUE OF CAR QUANTITY USNIG CONDITIONALS 
        car.quantity = car.quantity ? car.quantity : 1;

        //SETTING TOTAL QUANTITY
        totalQuantity = totalQuantity + car.quantity;
        //SETTING TOTAL PRICE
        totalPrice = totalPrice + car.price * car.quantity;

    }

    return (
        <div className='cart-section'>
            <h3>Car Cart</h3>
            <h4>Car Quantity : {totalQuantity} </h4>
            <h4>Total Price : ${totalPrice}</h4>
            <button className='cart-button'>{cartIcon} Buy Now</button>

            <h5>Your Choice List</h5>
            {
                cart.map(car => <p key={car.id} className='name-list'>{car.name}</p>)
            }
        </div>
    );
};

export default Cart;