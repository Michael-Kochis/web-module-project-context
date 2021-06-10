import React from 'react';
import { useProducts } from '../contexts/ProductContext'
import { useCart } from '../contexts/cartContext'

// Components
import Product from './Product';

const Products = () => {
	const { products } = useProducts();
	const { addItem } = useCart();

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
