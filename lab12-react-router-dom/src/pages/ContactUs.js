import React from 'react';
import { useState } from 'react';

// A hook is a function provided by React or third-party packages
// - useNavigate creates a function which we can use to change 'pages'
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
	// Create a navigation function returned from useNavigate()
	const navigate = useNavigate();

	// IMPORTANT: Event handlers always use arrow functions ('this')
	// formState is now an object
	// Ensure that the key matches the input names
	const [formState, setFormState] = useState({
		fullname: '',
		email: ''
	});

	const updateFormField = (event) => {
		setFormState({
			...formState, // cloning the original formState object
			[event.target.name]: event.target.value // overwrite the key that previously exists (since the last duplicated key will overwrite the older key)
		});
	};

	// Ensure that function is declared before using it
	function submitForm() {
		// use the returned navigate function to change page
		navigate('/form-submitted');
	}

	return (
		<React.Fragment>
			<h1>Contact Us</h1>

			<div>
				<label>Full name</label>
				<input
					type='text'
					name='fullname'
					value={formState.fullname}
					onChange={updateFormField}
				/>
			</div>
			<div>
				<label>Email</label>
				<input
					type='text'
					name='email'
					value={formState.email}
					onChange={updateFormField}
				/>
			</div>
			<input type='submit' value='Submit' onClick={submitForm} />
		</React.Fragment>
	);
}
