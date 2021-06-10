import React, { createContext, useContext, useState } from 'react'
import data from '../data'

const ProductContext = createContext();

function useProducts() {
    return useContext(ProductContext)
}

function ProductProvider(props) {
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([
			...cart,
			item
		])
	};

    const value = {
        addItem,
        cart,
        products
    }

    return (
        <ProductContext.Provider value={value} >
            {props.children}
        </ProductContext.Provider>
    )
}

export {
    ProductProvider,
    useProducts
}