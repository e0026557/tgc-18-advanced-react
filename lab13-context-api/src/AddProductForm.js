import React from 'react';
import ProductContext from './ProductContext';

export default class AddProduct extends React.Component {
	state = {
		name: '',
		cost: ''
	};

	// To use the context for class-based component
	// the 'static' keyword means the class itself
	// -> allows us to use 'this.context' to access the ProductContext
	static contextType = ProductContext;

	updateFormField = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addProduct = () => {
		this.context.addProduct(this.state.name, this.state.cost);
	};

	render() {
		return (
			<React.Fragment>
				<div>
					<label>Product Name</label>
					<input
						type='text'
						name='name'
						value={this.state.name}
						onChange={this.updateFormField}
					/>
				</div>
				<div>
					<label>Cost</label>
					<input
						type='text'
						name='cost'
						value={this.state.cost}
						onChange={this.updateFormField}
					/>
				</div>
				<button onClick={this.addProduct}>Add</button>
			</React.Fragment>
		);
	}
}
