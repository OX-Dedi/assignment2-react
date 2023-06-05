import React from 'react';

const Table = ({ students, deleteStudent }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>NO</th>
          <th>FULL NAME</th>
          <th>BIRTH DATE</th>
          <th>GENDER</th>
          <th>FACULTY</th>
          <th>PROGRAM STUDY</th>
          <th>OPTION</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id} className="student-data-row">
            <td>{index + 1}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button
                onClick={() => deleteStudent(student.id)}
                data-testid={`delete-${student.id}`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
