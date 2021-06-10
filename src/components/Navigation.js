import React from 'react';
import { NavLink } from 'react-router-dom';

import { useCart } from '../contexts/cartContext'

const Navigation = () => {
	const { cart } = useCart();

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
