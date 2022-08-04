import React from 'react';
import { useState } from 'react';

// A hook is a function provided by React or third-party packages
// - useNavigate creates a function which we can use to change 'pages'
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
	// Create a navigation function returned from useNavigate()
	const navigate = useNavigate();

	const [fullname, setFullname] = useState(''); // The argument in the useState is the default value
	const [email, setEmail] = useState('');

	// IMPORTANT: Event handlers always use arrow functions ('this')
	const updateFullName = (event) => {
		setFullname(event.target.value);
	};

	const updateEmail = (event) => {
		setEmail(event.target.value);
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
					value={fullname}
					onChange={updateFullName}
				/>
			</div>
			<div>
				<label>Email</label>
				<input
					type='text'
					name='email'
					value={email}
					onChange={updateEmail}
				/>
			</div>
			<input type='submit' value='Submit' onClick={submitForm} />
		</React.Fragment>
	);
}
