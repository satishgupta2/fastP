import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateStudent = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update student
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? { name, grade } : student
      );
      setStudents(updatedStudents);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add new student
      setStudents([...students, { name, grade }]);
    }
    setName('');
    setGrade('');
  };

  const handleEdit = (index) => {
    const student = students[index];
    setName(student.name);
    setGrade(student.grade);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1>Student Grades Management</h1>
      <form onSubmit={handleAddOrUpdateStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'} Student</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
