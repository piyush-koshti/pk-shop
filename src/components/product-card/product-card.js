import React, { useContext } from "react";
import "./product-card.scss"

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "./../button/button"

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => {addItemToCart(product)}
    return(
        <>
            <div className="product-card-container">
                <img className="pro-img" src={imageUrl} alt={`pro-img-${name}`}/>
                <div className="product-footer">
                    <span className="product-footer-name">{name}</span>
                    <span className="product-footer-price">{price}</span>
                </div>
                <Button 
                    // buttonType='inverted' 
                    buttonType={ BUTTON_TYPE_CLASSES.inverted } 
                    onClick={addProductToCart}
                >Add to card</Button>
            </div>
        </>
    )
}

export default ProductCard