import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './contexts/cartContext';
import { ProductProvider } from './contexts/ProductContext'

function App() {
	return (
		<div className="App">
			<ProductProvider>
				<CartProvider>
					<Navigation />

				
					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartProvider>
			</ProductProvider>
			
		</div>
	);
}

export default App;
