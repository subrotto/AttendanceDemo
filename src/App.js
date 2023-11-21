import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList/CourseList';
import ClassList from './components/ClassList/ClassList';
import StudentList from './components/StudentList/StudentList';
import AttendancePerClass from './components/AttendancePerClass/AttendancePerClass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CourseList></CourseList>}></Route>
        <Route exact path='/class/:courseId' element={<ClassList></ClassList>}></Route>
        <Route exact path='/student/:classId' element={<StudentList></StudentList>}></Route>
        <Route exact path='/perclassattendance/:classId' element={<AttendancePerClass></AttendancePerClass>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
