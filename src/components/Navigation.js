import React from 'react';
import { NavLink } from 'react-router-dom';

import { useProducts } from '../contexts/ProductContext'

const Navigation = () => {
	const { cart } = useProducts();

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
