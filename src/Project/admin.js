import { useNavigate, useParams } from "react-router-dom"
import "./admin.css"
import { Button, useAccordionButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
function Pageadmin() {
  const { name } = useParams();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/admin")
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [deldata, setdeldata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/teacher")
      .then((res) => {
        setdeldata(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  const Stdnavi = useNavigate()
  const Btnstd = () => {
    Stdnavi('/Addstd');
  }
  const Teachernavi = useNavigate()
  const Btnteacher = () => {
    Teachernavi(`/Addteacher/${name}`);
  }
  const handleCheckInOut = () => {
    isCheckedIn ? setIsCheckedIn(false) : setIsCheckedIn(true)
    show ? setShow(false) : setShow(true)
  };

  const techerdeletebtn = (id) => {
    axios.delete(`http://localhost:3000/teacher/${id}`)
      .then(() => {
        setdeldata((prevData) => prevData.filter((teacher) => teacher.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const naviupdate = useNavigate()
  const upadatebtn = (name) => {
    naviupdate(`/Updateteacher/${name}`)

  }

  return (
    <div id="flexadmin">
      <div id="adminflex">
        <div>
          <h1>hi {name} admin user!</h1>
        </div>
        <Button

          onClick={handleCheckInOut}
          className={`btn ${isCheckedIn ? "bg-danger" : ""}`}
        >
          {isCheckedIn ? "CHECK OUT" : "CHECK IN"}
        </Button>

        <button
          className={`btn ${isCheckedIn ? "cursor" : ""}`}
          onClick={Btnteacher}
        >
          ADD TEACHER
        </button>

        <button className="btn" onClick={Btnstd} >
          ADD STUDENT
        </button>
      </div>
      <div>
        {show && (
          <div>
            <div id="admintabel">
              {data
                .filter((ele) => ele.name === name)
                .map((admin) => (
                  <div key={admin.id}>
                    <h4>NAME: {admin.name}</h4>
                    <h4>Mobile No: {admin.mobile}</h4>
                    <h4>Qualification: {admin.qualification}</h4>
                    <h4>AGE: {admin.age}</h4>
                  </div>
                ))}
              <div>
                <h1>Leave request</h1>
              </div>
            </div>
            <h1 className="text-primary text-center">TEACHER LIST</h1>
            <div className="teslist">
              <table>
                <tr >
                  <th>Name</th>
                  <th>Age</th>
                  <th>DOB</th>
                  <th>Qualification</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>u/d</th>
                </tr>

                {deldata.map((teacher) => (
                  <tbody key={teacher.id} className="tealist">


                    <tr>
                      <td>{teacher.name}</td>
                      <td>{teacher.age}</td>
                      <td>{teacher.dob}</td>
                      <td>{teacher.Qualification}</td>
                      <td>{teacher.Gender}</td>
                      <td>{teacher.Email}</td>
                      <td>{teacher.Adreass  }</td>
                      <td>
                        <button onClick={() => techerdeletebtn(teacher.id)} className="btn">delete</button>
                        <button onClick={() => upadatebtn(teacher.name)} className="btn" >update </button>
                      </td>

                    </tr>
                  </tbody>

                ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Pageadmin