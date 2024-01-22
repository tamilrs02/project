import { useEffect, useState } from 'react'
import './std.css'
import loginpic from './project img/pexels-rodolfo-quirós-1848731.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Std() {
    const [data, setdata] = useState([]);
    const [error,seterror]=useState(false)
    const stdnavigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3000/student")
            .then((res) => {
                setdata(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const adminbtn = () => {
        let Adminname = document.getElementById('user');
        let Adminpassword = document.getElementById('pass');
        const Invalid = data.find((ele) => ele.name === Adminname.value && ele.dob === Adminpassword.value);
        if (Invalid) {
            console.log('passed');
            stdnavigate('/Pagestd/'+Adminname.value)
        } else {
            console.log('failed');
            seterror(true)
        }
    }
    return (
            <div className='logcontainer'>
                <form action='' className='logform'>
                <h2>Student Login</h2>
                <input id='user' placeholder='Enter User Name' className='logbox'></input>
                <input id='pass' type='date' className='logbox' placeholder='enter the password'></input>
                <button onClick={adminbtn} className='btn'>Login</button>
                </form>
                <div className='sidepic'>
                    <img src={loginpic}/>
                </div>
            </div>
    );
}
export default Std;