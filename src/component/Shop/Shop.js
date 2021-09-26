import React, { useEffect, useState } from 'react';
//IMPORT CARS FILE
import Cars from '../Cars/Cars';
//IMPORT CART FILE
import Cart from '../Cart/Cart';
//CSS FILE
import './Shop.css';


const Shop = () => {
    // SETTING CARS STATE
    const [cars, setCars] = useState([]);
    //SETTING CART STATE
    const [cart, setCart] = useState([]);

    // FETCHING DATA
    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setCars(data));

    }, []);

    // SETTING EVENT HANLDER FOR CAR BUTTONS
    const handleToCart = (car) => {
        const newCart = [...cart, car]
        setCart(newCart);


    }


    return (
        <div className='shop-container'>

            <div className='cars-container'>

                {
                    cars.map(car => <Cars
                        key={car.number}
                        handleToCart={handleToCart}
                        car={car} />)
                }

            </div>

            <div className='cart-container'>

                <Cart
                    cart={cart} />
            </div>
        </div>
    );
};

export default Shop;