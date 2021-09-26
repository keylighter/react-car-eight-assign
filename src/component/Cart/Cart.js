import React from 'react';

const Cart = (props) => {
    const { cart } = props
    // console.log(props.cart.length);

    let totalQuantity = 0;

    let totalPrice = 0;

    // let carName;

    for (const car of cart) {
        car.quantity = car.quantity ? car.quantity : 1;

        totalQuantity = totalQuantity + car.quantity;

        totalPrice = totalPrice + car.price * car.quantity;

        // carName = car.name;
    }

    return (
        <div>
            <h3>Car Cart</h3>
            <h5>Car Quantity : {totalQuantity} </h5>
            <h5>Total Price : ${totalPrice}</h5>
            {
                cart.map(car => <p>{car.name}</p>)
            }
        </div>
    );
};

export default Cart;