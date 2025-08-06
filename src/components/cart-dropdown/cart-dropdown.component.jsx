import React, { useContext } from "react";
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from "./cart-dropdown.styles"
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { NavLink, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    // const navigate = useNavigate(); // This is hooks used to provide navigate function to the checkout page

    // const goToCheckoutHandler = () => {
    //     navigate("/checkout");  // Navigate to the checkout page
    // }

    return(
        <>
            <CartDropdownContainer>
                {cartItems.length > 0 ?
                    (
                        <CartItems>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} cartItem={item}/>
                                ))
                            }
                        </CartItems>
                    ) : (
                        <EmptyMessage>Empty Cart Items</EmptyMessage>
                    )
                }
                <NavLink to="/ecom/checkout">
                    <Button>GO TO CHECKOUT</Button>
                </NavLink>
            </CartDropdownContainer>
        </>
    )
}

export default CartDropdown