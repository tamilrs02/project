import axios from "axios";
import "./addstd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Addstd() {
  const [data, setdata] = useState("");
  const [name, setname] = useState("");
  const [sec, setSec] = useState("");
const [error,seterror]=useState(false)
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [ocp, setOcp] = useState("");
  const [adrss, setAdrss] = useState(" ");
  const submit = () => {

    if (
      name.trim() !== "" &&
      age.trim() !== "" &&
      dob.trim() !== "" &&
      bloodgroup.trim() !== "" &&
      gender.trim() !== "" &&
      mail.trim() !== "" &&
      adrss.trim() !== ""
    ) {
      axios
        .post("http://localhost:3000/student", {
          name,
          sec,
          age,
          dob,
          mail,
          bloodgroup,
          gender,
          fname,
          mname,
          ocp,
          adrss,
        })
        .then((res) => {
          setdata(res.data);
          console.log('true');
        })
        .catch((err) => {
          console.log(err);
        });

      seterror("");
      setname("");
      setDob("");
      setAge("");
      setGender("");
      setMail("");
      setAdrss("");
      setBloodGroup("");
      naviback('/Pageadmin');
    } else {
      seterror("Please fill in all fields.");
      console.log('false');
     
    }
  };
  const naviback = useNavigate();

  const backbtn = () => {
    naviback('/Adminvalidation');
  };
  
     
  return (
    <div id="addtecher" >
         <div className="form">
      <h1>ADD STUDENT</h1>
      <form>
        <h5>
          Name:
          <input
            type="text" placeholder="ENTER THE NAME"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
        </h5>
        <h5>
          Class:
          <input
            type="text" placeholder="ENTER THE CLASS"
            value={sec}
            onChange={(e) => setSec(e.target.value)}
          ></input>
        </h5>

        <h5>
          Age:
          <input
            type="number" placeholder="ENTER YOUR AGE"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </h5>
        <h5>
          DOB:
          <input
            type="date" placeholder="ENTER YOUR DATEOF BIRTH"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          ></input>
        </h5>
        <h5>
        bloodgroup:
          <input
            type="text"
            value={bloodgroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
          </input >
        </h5>

        <h5>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">Female</option>
            <option value="nonBinary">male</option>
            <option value="other">Other</option>
          </select>
        </h5>
        <h5>
          Email:
          <input
            type="email" placeholder="ENTER THE EMAIL"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          ></input>
        </h5>
        <h5>
        Fathername:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          >
          </input >
        </h5>
        <h5>
        Mothername:
          <input
            type="text"
            value={mname}
            onChange={(e) => setMname(e.target.value)}
          >
          </input >
        </h5>
        <h5>
        Occupucation:
          <input
            type="text"
            value={ocp}
            onChange={(e) => setOcp(e.target.value)}
          >
          </input >
        </h5>
        <h5>Address:</h5>
        <textarea
          id="myTextarea"
          name="myTextarea"
          rows="4"
          cols="50"
          value={adrss}
          onChange={(e) => setAdrss(e.target.value)}
        ></textarea>

      </form>
      <h4 className="text-center">{error && <h6>Please fill in all fields.</h6>}</h4>
      <button onClick={submit}>Submit</button>
     
    </div>
    <button onClick={backbtn} id="backbtn">back</button>
    </div>
   
  );
}

export default Addstd