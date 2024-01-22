import './home.css';
import about from '../Project/project img/about.jpg'
import about1 from '../Project/project img/about-1.jpg'
import subject1 from '../Project/project img/subject-1.png'
import subject2 from '../Project/project img/subject-2.png'
import subject3 from '../Project/project img/subject-3.png'
import subject4 from '../Project/project img/subject-4.png'
import teacher1 from '../Project/project img/teacher-1.png'
import teacher2 from '../Project/project img/teacher-2.png'
import teacher3 from '../Project/project img/teacher-3.png'
import teacher4 from '../Project/project img/teacher-4.png'

import { RiLoginBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Home() {
    const mergestd = useNavigate();
    const stdlogin = () => {
        mergestd('/Std');
    }

    const mergeteacher = useNavigate();
    const Teacherln = () => {
        mergeteacher('/Teacherlogin'); // Fix: Use '/Teacherlogin' instead of './Teacherlogin'
    }

    const mergeadmin = useNavigate();
    const Adminlogin = () => {
        mergeadmin('/Adminlogin');
    }

    return <div className='body'>
        {/* navbar */}
        <header className='header'>
            <h3 className="logo"> <i><IoMdSchool /></i> Gani Academy</h3>
            <nav className='navbar'>
                <button className="btn" onClick={stdlogin}>STUDENT</button>
                <button className="btn" onClick={Teacherln}>TEACHER</button>
                <button className="btn" onClick={Adminlogin}>ADMIN</button>
            </nav>
        </header>

        {/* ---- navbar end ---- */}

        {/* ----  banner start ---- */}

        <section className="home" id="home">

            <div className="content">
                <h3>the best courses you will find here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi fuga unde, voluptates,
                    nisi qui hics.</p>
                <a href="#" className="btn">
                    <span className="text text-1">learn more</span>
                    <span className="text text-2" aria-hidden="true">learn more</span>
                </a>
            </div>

        </section>

        {/* ----  banner start ---- */}

        <section class="about" id="about">

            <h1 className="heading">about us</h1>

            <div className="container">

                <figure className="about-image">
                    <img src={about} id='abtimg1' />
                    <img src={about1} className='about-img' />

                </figure>

                <div className="about-content">
                    <h3>Welcome to  Academy</h3>
                    <p>Gani Academy is an Higher Secondary School started in the year 1997 and here we stand proud stepping into the 25th year seeking inspiration from our own achievement and continuing the quest for excellence. Gani Academy trives tirelessly, creating milestones, attaining the unattainable and creating history.In order to achieve their goal of being unique and progressive in the field of education, the school has a lot of innovative systems and facilities in place that have proved to be both creative and effective. Conscious efforts are made to inculcate reading habits and develop communication skills among the students</p>
                    <a href="#" className="btn">
                        <span className="text text-1">read more</span>
                        <span className="text text-2" aria-hidden="true">read more</span>
                    </a>
                </div>

            </div>

        </section>
        {/* ----  banner End ---- */}


        <section class="teacher" id="teacher">

            <h1 class="heading">Alumuni</h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src={teacher1} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher2} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher3} />
                        <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={teacher4} />
                        <div class="share">
                            <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                            <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                            <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <div class="content">
                        <h3>john deo</h3>
                        <span>instructor</span>
                    </div>
                </div>

            </div>

        </section>


        {/* ----  banner start ---- */}


        <section class="subjects">

            <h1 class="heading">our achievements</h1>

            <div class="box-container">

                <div class="box">
                    <img src={subject1} />
                    <h3>QCE Success for Year 12</h3>
                    <p>fun & challenging</p>
                </div>

                <div class="box">
                    <img src={subject2} />
                    <h3>Tailored Pathways for Success</h3>
                    <p>fun & challenging</p>
                </div>

                <div class="box">
                    <img src={subject3} />
                    <h3>Engaged & Supported Learners</h3>
                    <p>fun & challenging</p>
                </div>

                <div class="box">
                    <img src={subject4} />
                    <h3>Satisfaction in Teaching & Learning</h3>
                    <p>fun & challenging</p>
                </div>

            </div>

        </section>


        

        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>find us here</h3>
                    <p>Gani Academy</p>
                    <div class="share">
                        <a href="#" className="fab fa-facebook-f"><FaFacebookSquare /></a>
                        <a href="#" className="fab fa-twitter"><LuTwitter /></a>
                        <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <p>+91 9940721525</p>
                    <a href="#" class="link">ganiedu@gmail.com</a>
                </div>

                <div className="box">
                    <h3>location</h3>
                    <h5>Cit Nager , T-Nager </h5>
                    <h5>Chennai - 600006 </h5>
                    <h5>Tamilnadu</h5>
                </div>

            </div>
            <div className="credit">created by <span>Tamil RS </span>| Imran - Crampete</div>
        </section>

    </div>
}

export default Home;
