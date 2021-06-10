import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductProvider } from './contexts/ProductContext'

function App() {
	return (
		<div className="App">
			<ProductProvider>
				<Navigation />

			
				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</ProductProvider>
			
		</div>
	);
}

export default App;
