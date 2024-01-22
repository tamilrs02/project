import '../Project/adminlogin.css'
import axios from "axios";
import loginpic from './project img/pexels-rodolfo-quirós-1848731.jpg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
    const [data, setdata] = useState([]);
    const adminnavigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3000/admin")
            .then((res) => {
                setdata(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const adminbtn = () => {
        let Adminname = document.getElementById('adminname');
        let Adminpassword = document.getElementById('adminpassword');
        const Invalid = data.find((ele) => ele.name === Adminname.value && ele.DOB === Adminpassword.value);
        if (Invalid) {
            console.log('passed');
            adminnavigate("Pageadmin/" +Invalid.name)
        } else {
            console.log('failed');
        }
    }
    return (
        <div className='logcontainer'>
        <form action='' className='logform'>
        <h2>Admin Login</h2>
        <input id='adminname' placeholder='Enter User Name' className='logbox'></input>
        <input id='adminpassword' type='date' className='logbox' placeholder='enter the password'></input>
        <button onClick={adminbtn} className='btn'>Login</button>
        </form>
        <div className='sidepic'>
            <img src={loginpic}/>
        </div>
    </div>
    );

}
export default Adminlogin