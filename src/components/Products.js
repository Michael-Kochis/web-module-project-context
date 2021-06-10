import React from 'react';
import { useProducts } from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = () => {
	const { addItem, products } = useProducts();

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
