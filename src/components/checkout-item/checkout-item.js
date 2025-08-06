import React, { useContext } from "react";
import "./checkout-item.scss"

import { CartContext } from "../../contexts/cart.context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons'

const CheckoutItem = ({cartItem}) => {
    const { id, name, imageUrl, price, quantity } = cartItem
    const { 
        // increaseCartItem,
        addItemToCart,
        removeItemToCart,
        clearItemFromCart 
    } = useContext(CartContext)

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)

    return(
        <tr className="checkout-item-container">
            <td className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </td>
            <td className="name">{name}</td>
            <td className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </td>
            <td className="price">${price * quantity}</td>
            <td className="remove-button text-end pe-3" onClick={clearItemHandler}>
                <FontAwesomeIcon icon={faXmark} />
            </td>
        </tr>
    )
}

export default CheckoutItem