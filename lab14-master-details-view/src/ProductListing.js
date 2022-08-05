import React, { useContext } from 'react';
import ProductContext from './ProductContext';

export default function ProductListing() {
	const productContext = useContext(ProductContext);

	return (
		<React.Fragment>
			<h1>Product Listings</h1>
			<ul>{productContext.getProducts().map((product) => {
				return (<li>{product.product_name} (${product.cost})</li>)
			})}</ul>
		</React.Fragment>
	);
}
