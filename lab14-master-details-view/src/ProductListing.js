import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import { Link } from 'react-router-dom';

export default function ProductListing() {
	const productContext = useContext(ProductContext);

	return (
		<React.Fragment>
			<h1>Product Listings</h1>
			<ul>{productContext.getProducts().map((product) => {
				return (<li>
					<Link to={"/product/" + product.id}>
						{product.product_name} (${product.cost})
					</Link>
				</li>)
			})}</ul>
		</React.Fragment>
	);
}
