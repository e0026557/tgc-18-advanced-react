import { Fragment, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; // same idea as in Express
import ProductContext from './ProductContext';

export default function ProductDetailsPage(props) {
	// Eg: /products/:productId
	// useParams() will return an object with all the parameters and their values
	// -> just like req.params in express
	// IMPORTANT: all values from params are string!
	const { productId } = useParams(); // object destructuring

	const [product, setProduct] = useState({}); // store the product we are displaying
	const context = useContext(ProductContext);

	// componentDidMount
	useEffect(() => {
		const product = context.getProductById(parseInt(productId));
		setProduct(product);
	}, [productId]);

	return (
		<Fragment>
			<h1>{product.product_name}</h1>
			<ul>
				<li>ID: {product.id}</li>
				<li>Cost: {product.cost}</li>
			</ul>
		</Fragment>
	);
}
