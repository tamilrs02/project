import axios from "axios";
import '../Project/stdpage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pagestd() {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/student`)
            .then((res) => {
                setData(res.data);
                setShow(true);  // Set show to true after data is fetched
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);  // Empty dependency array, runs once when the component mounts

    return (
        <div>
            <h1> Hello {name}</h1>
            <h2>Personal Detail</h2>
            <div>
                <div className="stdinfo">
                    {show &&
                        data
                            .filter((ele) => ele.name === name)
                            .map((student) => (
                                <div  key={student.id}>
                                    <div className="stddetails"> 
                                    <h6>Name : {student?.name}</h6>
                                    <h6>Class : {student?.sec}</h6>
                                    <h6>Age : {student?.age}</h6>
                                    <h6>DOB : {student?.dob}</h6>                                  
                                    <h6>Blood Group : {student?.bloodgroup}</h6>
                                    <h6>Gender : {student?.gender}</h6>
                                    <h6>Email : {student?.mail}</h6>
                                    </div>
                                    
                                    <h5>Parent Details</h5>
                                    <div  className="stddetails">
                                    <h6>Father : {student?.fname}</h6>
                                    <h6>Mother : {student?.mname}</h6>
                                    <h6>Occupation : {student?.ocp}</h6>
                                    <h6>ADDRESS : {student?.adrss}</h6>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
}

export default Pagestd;
