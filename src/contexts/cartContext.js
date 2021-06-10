import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

function useCart() {
    return useContext(CartContext)
}

function CartProvider(props) {
    const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([
			...cart,
			item
		])
	};

    const value = {
        addItem,
        cart
    }

    return (
        <CartContext.Provider value={value} >
            {props.children}
        </CartContext.Provider>
    )
}

export {
    CartProvider,
    useCart
}