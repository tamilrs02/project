import { BrowserRouter, Route, Routes } from "react-router-dom";
import Std from "./Project/std";
import Page from "./Project/page";
import Teacherlogin from "./Project/teacherlogin";
import Adminlogin from "./Project/adminlogin";
import Pageadmin from "./Project/admin";
import Addstd from "./Project/addstd";
import Addteacher from "./Project/addteacher";
import Updateteacher from "./Project/updateteacher";
import Teacherlist from "./Project/teacher";
import Pagestd from "./Project/stdpage";
import Leaverequest from "./Project/leaverequest";
import Attendance from "./Project/attendence";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page/>}></Route>
      <Route path="/Std" element={<Std/>}></Route>
      <Route path="/Teacherlogin" element={<Teacherlogin/>}></Route>
        <Route path="/Adminlogin" element={<Adminlogin/>}></Route>
        <Route path="/Adminlogin/Pageadmin/:name" element={<Pageadmin/>}></Route>
        <Route path="/Addstd" element={<Addstd/>}></Route>
        <Route path="/Addteacher/:adminname" element={<Addteacher/>}></Route>
        <Route path="/Pageadmin" element={<Pageadmin/>}></Route>
        <Route path="/Pagestd/:name" element={<Pagestd/>}></Route>
        <Route path="/Updateteacher/:names" element={<Updateteacher/>}></Route>
        <Route path="/Teacherlist/:name" element={<Teacherlist/>}></Route>
        <Route path="/Leaverequest/:name" element={<Leaverequest/>}></Route>
        <Route path="/Attendance/:name/:std" element={<Attendance/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
