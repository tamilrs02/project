import axios from "axios";  
import "./attendence.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Attendance() {
  const { std } = useParams();
  const { name } = useParams();
  const [student, setStudent] = useState([]);
  const [output, setOutput] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then((res) => {
        console.log(res.data.filter(e => e.sec === std))
        setStudent(res.data.filter(e => e.sec === std));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [std]);

  useEffect(() => {
    const newOutput = student.map(e => ({ name: e.name, date: date, present: false, teachername: name }));
    setOutput(newOutput);
  }, [student, date, name]);

  function attendance(id) {
    let copy = [...output];
    copy = copy.map(obj => obj.name === id ? { ...obj, present: !obj.present } : obj)
    setOutput(copy);
  }

  async function submit() {
    try {
      const promises = output.map(async (e) => {
        await axios.post("http://localhost:3000/Attendance", e);
      });
  
      await Promise.all(promises);
  
      console.log('All requests completed successfully');
    } catch (error) {
      console.error('Error during requests:', error);
    }
  }
  
  
  return (
    <div id="atanacebody">
    <h1 className="stdhead">Student Attendance</h1>
    <h1 className="stdhead1">Class Teacher Name: {name}</h1>
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        {student.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>
              <input type="checkbox" id="checkboxinput" onChange={() => attendance(e.name)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button id="stdstnbtn" onClick={submit}>Submit</button>
  </div>

  );
}

export default Attendance;
