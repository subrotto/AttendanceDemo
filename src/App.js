import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList/CourseList';
import ClassList from './components/ClassList/ClassList';
import StudentList from './components/StudentList/StudentList';
import AttendancePerClass from './components/AttendancePerClass/AttendancePerClass';
import StuAttendancePerClass from './components/StuAttendancePerClass/StuAttendancePerClass';
import StuClassList from './components/StuClassList/StuClassList';
import StuCourseList from './components/StuCourseList/StuCourseList';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import AssignQR from './components/AssignQR/AssignQR';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';
import TotalAttendance from './components/TotalAttendance/TotalAttendance';
import AdminCourse from './components/AdminCourse/AdminCourse';
import AdminClass from './components/AdminClass/AdminClass';
import AdminResult from './components/AdminResult/AdminResult';
import AdminLogin from './components/AdminLogin/AdminLogin';
import NewStudentList from './components/NewStudentList/NewStudentList';
import StudentLogin from './components/StudentLogin/StudentLogin';
import StudentProfile from './components/StudentProfile/StudentProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>}></Route>
        <Route exact path='/frontpage' element={<FrontPage></FrontPage>}></Route>
        <Route exact path='/assignqr' element={<AssignQR></AssignQR>}></Route>
        <Route exact path='/courselist' element={<CourseList></CourseList>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/totalattendance' element={<TotalAttendance></TotalAttendance>}></Route>
        <Route exact path='/registration' element={<Registration></Registration>}></Route>
        <Route exact path='/stucourselist' element={<StuCourseList></StuCourseList>}></Route>
        <Route exact path='/class/:courseId' element={<ClassList></ClassList>}></Route>
        <Route exact path='/stuclass/:courseId' element={<StuClassList></StuClassList>}></Route>
        <Route exact path='/admincourse/:courseId/:studentId' element={<AdminResult></AdminResult>}></Route>
        <Route exact path='/admincourse/:courseId' element={<AdminClass></AdminClass>}></Route>
        <Route exact path='/student/:classId' element={<StudentList></StudentList>}></Route>
        <Route exact path='/perclassattendance/:classId' element={<AttendancePerClass></AttendancePerClass>}></Route>
        <Route exact path='/stuperclassattendance/:classId' element={<StuAttendancePerClass></StuAttendancePerClass>}></Route>
        <Route exact path='/admincourse' element={<AdminCourse></AdminCourse>}></Route>
        <Route exact path='/stu/:coursenam' element={<NewStudentList></NewStudentList>}></Route>
        <Route exact path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route exact path='/studentlogin' element={<StudentLogin></StudentLogin>}></Route>
        <Route exact path='/stuprofile/:studentid' element={<StudentProfile></StudentProfile>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
