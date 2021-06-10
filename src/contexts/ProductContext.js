import React, { createContext, useContext, useState } from 'react'
import data from '../data'

const ProductContext = createContext();

function useProducts() {
    return useContext(ProductContext)
}

function ProductProvider(props) {
    const [products, setProducts] = useState(data);

    const addProduct = item => {
        setProducts([
            ...products,
            item
        ])
    }

    const value = {
        addProduct,
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