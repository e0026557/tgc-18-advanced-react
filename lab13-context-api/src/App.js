import React, { useState } from 'react';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';

function App() {
	const [products, setProducts] = useState([
		{
			id: 1,
			product_name: 'brown rice cookie',
			cost: 9.99
		},
		{
			id: 2,
			product_name: 'brown rice drink',
			cost: 9.99
		},
		{
			id: 3,
			product_name: 'brown rice cake',
			cost: 9.99
		}
	]);

	// this context object goes into productcontext
	const context = {
		// function to get all the products (make sure it is an arrow function)
		getProducts: () => {
			return products; // products from the state variable
		}
	};

	return (
		<React.Fragment>
			{/* Set the value of ProductContext to be the context that we have just created */}
			<ProductContext.Provider value={context}>
				<h1>My Catalog</h1>
				{/* Since ProductListing is a descendant of ProductContext, it can use the context */}
				<ProductListing />
			</ProductContext.Provider>
		</React.Fragment>
	);
}

export default App;
