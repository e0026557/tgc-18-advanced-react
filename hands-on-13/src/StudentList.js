import React, { useContext } from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {
	const studentContext = useContext(StudentContext);

	return (
		<React.Fragment>
			<table>
				<thead>
					<tr>
						<th>Student No.</th>
						<th>Year of study</th>
						<th>Gender</th>
						<th>Graduated</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{studentContext.getStudents().map((student) => {
						return (
							<tr>
								<td>{student.id}</td>
								<td>{student.year}</td>
								<td>{student.gender}</td>
								<td>{student.graduated}</td>
								<td>
									<button
										onClick={() =>
											studentContext.deleteStudent(
												student.id
											)
										}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</React.Fragment>
	);
}
