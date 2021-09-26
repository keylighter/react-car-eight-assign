import React from 'react';
//IMPORT FONT AWSOME ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//CSS FILE
import './Cars.css'

//NAMING THE CART ICON
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Cars = (props) => {
    //DESTRUCTURING OBJECT
    const { name, price, image, mileage, size, country } = props.car;

    return (
        <div className='car-card'>
            <img className='car-image' src={image} alt='' />
            <h5>Name: {name}</h5>
            <h6>Mileage: {mileage} </h6>
            <h6>Size: {size} </h6>
            <h6>Price:${price} </h6>
            <h6>Origin: {country}</h6>
            <button className="car-button" onClick={() => props.handleToCart(props.car)}>{cartIcon} Add to cart</button>
            <br /><br />
        </div>
    );
};

export default Cars;