import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

function App() {
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

	const studentContext = {
		getStudents: () => {
			return students;
		},
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
