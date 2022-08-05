import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

function App() {
	// The first arg of useState is the default value for the students state variable
	// -> setStudents functions are ASYNC (need to await if doing a few that depends on the completion of another)
	const [students, setStudents] = useState([
		{
			id: Math.floor(Math.random() * 10000),
			year: 2020,
			gender: 'male',
			graduated: 'true'
		},
		{
			id: Math.floor(Math.random() * 10000),
			year: 2021,
			gender: 'female',
			graduated: 'true'
		},
		{
			id: Math.floor(Math.random() * 10000),
			year: 2022,
			gender: 'male',
			graduated: 'false'
		}
	]);

	// Also known as the controller (domain/model) -> state management
	// Note: make sure to use arrow functions
	const studentContext = {
		getStudents: () => {
			return students;
		},

		// if doing mongo or mysql, MUST use the restful API to add the new student to the database then the response of the API must include the new ID

		addStudent: (year, gender, graduated) => {
			setStudents([
				...students,
				{
					id: Math.floor(Math.random() * 10000),
					year,
					gender,
					graduated
				}
			]);
		},
		deleteStudent: (id) => {
			setStudents(students.filter((student) => student.id !== id));
		}
	};

	return (
		<React.Fragment>
			<StudentContext.Provider value={studentContext}>
				<StudentList />
				<AddStudent />
			</StudentContext.Provider>
		</React.Fragment>
	);
}

export default App;
