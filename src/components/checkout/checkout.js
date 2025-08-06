import React, { useContext, useEffect, useState } from "react";
import "./checkout.scss"

import { CartContext } from "../../contexts/cart.context"

import HomeHeader from "../home-header/home-header.component";
import Footer from '../footer/footer.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import CheckoutItem from "../checkout-item/checkout-item";

const Checkout = () => {
    const { 
        cartItems, 
        cartTotal,
    } = useContext(CartContext)
    // console.log(cartItems,cartTotal);
    return (
        <>
            <div className="checkout-container row container col-auto mx-auto pb-5 my-5">
                <table className="justify-content-center">
                    <thead className="checkout-header">
                        <tr className="text-start">
                            <td className="text-start ">
                                <span>Product</span>
                            </td>
                            <td className="">
                                <span>Description</span>
                            </td>
                            <td className="">
                                <span className="">Quantity</span>
                            </td>
                            <td className="">
                                <span className="">Price</span>
                            </td>
                            <td className="text-end">
                                <span>Remove</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.length > 0 
                                ? cartItems.map((cartItem) => 
                                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                )
                                : (
                                    <>
                                        <tr className="mx-auto">
                                            <td colSpan={5}>
                                                <h3 className="pt-4 text-center">Empty Cart Items</h3>
                                            </td>
                                        </tr>
                                    </>
                                )
                        }
                        <tr className="p-0">
                            <td className="total text-end" colSpan={5}>
                                <span>TOTAL: ${cartTotal}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Checkout