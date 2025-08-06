import { createContext, useState, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    // if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity += 1}
                : cartItem
        )
    }

    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]

    // const existingCartItemIndex = cartItems.findIndex(
    //     (cartItem) => cartItem.id === productToAdd.id
    // );
      
    // if (existingCartItemIndex !== -1) {
    //     return [
    //       ...cartItems.slice(0, existingCartItemIndex),
    //       { ...cartItems[existingCartItemIndex], quantity: cartItems[existingCartItemIndex].quantity + 1 },
    //       ...cartItems.slice(existingCartItemIndex + 1)
    //     ];
    // }
    
    // return [...cartItems, { ...productToAdd, quantity: 1 }];
}

// const incOneCartItem = (cartItems, checkoutItem) => {
//     return cartItems.map((cartItem) => 
//         cartItem.id === checkoutItem.id
//             ? { ...cartItem, quantity: cartItem.quantity += 1 }
//             : cartItem
//     )
// }

const decOneCartItem = (cartItems, checkoutItem) => {
    return cartItems.map((cartItem) => 
        cartItem.id === checkoutItem.id
            ? { ...cartItem, quantity: cartItem.quantity -= 1 }
            : cartItem
    )
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    // check if quantity is equal to 1, if it is remove that item from the cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        )
    }

    // return back cart items with matching cart item with reduced quantity
    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity -= 1 }
            : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => 
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    // increaseCartItem: () => {},
    // decreaseCartItem: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
})

export const CartProvider = ({children})=>{
    const [ isCartOpen, setIsCartOpen ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ cartCount, setCartCount ] = useState(0)
    const [ cartTotal, setCartTotal ] = useState(0)

    // count total number of items there in the cartItems array
    useEffect(() => {
        setCartCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
    },[cartItems])
    useEffect(() => {
        setCartTotal(cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity) ,0))
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    // const increaseCartItem = (checkoutItem) => {
    //     setCartItems(incOneCartItem(cartItems, checkoutItem))
    // }

    // const decreaseCartItem = (checkoutItem) => {
    //     setCartItems(decOneCartItem(cartItems, checkoutItem))
    // }

    const removeItemToCart = (cartItemToRemove)  => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear)  => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        cartTotal,
        // increaseCartItem,
        // decreaseCartItem, 
        removeItemToCart,
        clearItemFromCart,
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}