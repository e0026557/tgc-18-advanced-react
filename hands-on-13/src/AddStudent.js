import React, { useState, useContext } from 'react';
import StudentContext from './StudentContext';

export default function AddStudent() {
	const [formFields, setFormFields] = useState({
		year: '',
		gender: 'male',
		graduated: 'false'
	});

	const updateFormFields = (event) => {
		setFormFields({
			...formFields,
			[event.target.name]: event.target.value
		});
	};

	const studentContext = useContext(StudentContext);

	return (
		<React.Fragment>
			<div>
				<label>Year of Study</label>
				<input
					type='text'
					name='year'
					value={formFields.year}
					onChange={updateFormFields}
				/>
			</div>
			<div>
				<label>Gender</label>
				<input
					type='radio'
					name='gender'
					value='male'
					checked={formFields.gender === 'male'}
					onChange={updateFormFields}
				/>
				<label>Male</label>

				<input
					type='radio'
					name='gender'
					value='female'
					checked={formFields.gender === 'female'}
					onChange={updateFormFields}
				/>
				<label>Female</label>
			</div>
			<div>
				<label>Graduated</label>

				<input
					type='radio'
					name='graduated'
					value='true'
					checked={formFields.graduated === 'true'}
					onChange={updateFormFields}
				/>
				<label>Yes</label>

				<input
					type='radio'
					name='graduated'
					value='false'
					checked={formFields.graduated === 'false'}
					onChange={updateFormFields}
				/>
				<label>No</label>

				<button
					onClick={() => {
						studentContext.addStudent(
							formFields.year,
							formFields.gender,
							formFields.graduated
						);
					}}
				>
					Add Student
				</button>
			</div>
		</React.Fragment>
	);
}
