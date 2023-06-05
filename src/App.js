import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/student")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const addStudent = (student) => {
    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents([...students, data]);
      })
      .catch((error) => console.log(error));
  };  

  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((error) => console.log(error));
  };  

  return (
    <>
      <Form addStudent={addStudent} />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table students={students} deleteStudent={deleteStudent} />
      )}
    </>
  );
};

export default App;
