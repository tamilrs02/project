

import { useParams, Link } from "react-router-dom";
import "./teacher.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Teacherlist() {
  const { name } = useParams();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [cursor, setCursor] = useState(false);

  const [show, setShow] = useState(false);
  const [border, setBorder] = useState(true);
  const [edit, setEdit] = useState(false);
  const [timetable, setTimetable] = useState([]);
  const today = new Date().getDay();
  const todayIndex = new Date().getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = daysOfWeek[todayIndex];

  const [teachers, setTeachers] = useState({
    id: "",
    name: "",
    age: "",
    Gender: "",
    Qualification: "",
    experiance: "",
    Email: "",
    phonenumber: "",
    Adreass: "",
    class: "",
  });

  useEffect(() => {
    axios.get('http://localhost:3000/teacher')
      .then((res) => {
        const teacher = res.data.find((ele) => ele.name === name);
        setTeachers(teacher);
      })
      .catch((err) => {
        console.log(err);
      });


      axios.get('http://localhost:3000/timetable')
      .then((res) => {
        setTimetable(res.data);
      });
  }, [name]);

  let tabele = {};
  if (timetable && timetable.length !== 0) {
    tabele = timetable.find((e) => e.name === teachers.name);
  }

  let output = {};

  if (tabele && tabele.periods) {
    output = tabele.periods[today] || {};
  }

  const handleCheckInOut = () => {
    setIsCheckedIn(!isCheckedIn);
    setCursor(!cursor);
    setShow(!show);
  };

  const editBtn = () => {
    setBorder(false);
    setEdit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeachers((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const saveBtn = () => {
    axios
      .put('http://localhost:3000/teacher/update/${teachers._id}', teachers, {
        headers: { Authorization: "Basic YWRtaW46MTIz" },
      })
      .then(() => {
        console.log("success update");
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
    setBorder(true);
    setEdit(false);
  };

  return (
    <div id="teachersvalidation-body">
      <div id="naviflx">
        <h1>hi teacher {teachers.name} </h1>
        <div id="btnn">
          <Button
            onClick={handleCheckInOut}
            className={`btn ${isCheckedIn ? "bg-danger" : "bg-success"}`}
          >
            {isCheckedIn ? "CHECK OUT" : "CHECK IN"}
          </Button>
          {cursor ? (
            <Link className="btn" to={"/Leaverequest/" + teachers.name}>
              Leaverequest
            </Link>
          ) : (
            <Link className="btn">Leaverequest</Link>
          )}

          {cursor ? (
            <Link className="btn" to={'/Attendance/' + teachers.name + '/' + teachers.class}>
              Attendance
            </Link>
          ) : (
            <Link className="btn">Attendance</Link>
          )}
        </div>
      </div>
      {show && (
        <div>
          <div id="showflex">
            <h4>
              name:<label>{teachers.name}</label>
            </h4>
            <h4>
              age:<label>{teachers.age}</label>
            </h4>
            <h4>
              Gender:<label>{teachers.Gender}</label>
            </h4>
            <h4>
              DOB:<label>{teachers.dob}</label>
            </h4>
            
            <h4>
              experiance:<label>{teachers.experiance}</label>
            </h4>
            <h4>
              qualification:<label>{teachers.Qualification}</label>
            </h4>

          </div>
          <div id="showflex1">
            <h5>
              Email:
              <input
                name="Email"
                value={teachers.Email}
                className={border ? "updateinput" : "updateinput2"}
                onChange={handleChange}
              />
            </h5>

            <h5>
              phonenumber:
              <input
                name="phonenumber"
                value={teachers.phonenumber}
                className={border ? "updateinput" : "updateinput1"}
                onChange={edit ? handleChange : null}
              />
            </h5>

            <div>

              <button className="btn" onClick={() => editBtn(teachers._id)}>
                Edit
              </button>
              <button onClick={saveBtn} className="btn">
                Save
              </button>
            </div>
          </div>

          <h5 className="adreasname">
            Adreass:
            <input
              value={teachers.Adreass}
              className={border ? "teacherinputadrass" : "teacherinputadrass1"}
              name="address"
              onChange={edit ? handleChange : null}
            />
          </h5>

          <h1 className="headtimetable"> Today Time table</h1>
          <div id="timetable">
            {
              <table id="tabelechart">
                <tr>
                  <th>day</th>
                  <th>1 period</th>
                  <th>2 period</th>
                  <th>3 period</th>
                  <th>4 period</th>
                  <th>5 period</th>
                  <th>6 period</th>
                  <th>7 period</th>
                  <th>8 period</th>
                </tr>
                <tr>
                  <td className="tabledayname">{todayName}</td>
                  <td>{output.one}</td>
                  <td>{output.two}</td>
                  <td>{output.three}</td>
                  <td>{output.four}</td>
                  <td>{output.five}</td>
                  <td>{output.six}</td>
                  <td>{output.seven}</td>
                  <td>{output.eight}</td>
                </tr>
              </table>
            }

            {today === 0 || today === 6 ? (
              <h6 className="leave">
                -----------------------------------------------------------Today is a Leave
                day---------------------------------------------------------------
              </h6>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Teacherlist;