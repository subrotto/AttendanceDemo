import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminAttendance from '../AdminAttendance/AdminAttendance';

const AdminClass = () => {
    const {courseId}=useParams();
    const studentidRef=useRef();
    const [students,setStudents]=useState([]);
    const [courseNam,setCourseNam]=useState('');

    const handleAddstudent=()=>{
        const studentId = studentidRef.current.value;
        if(studentId){
            fetch(`http://localhost:5000/assignStudentToCourse`,{
                method:'POST',
                headers: {
                    
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify({courseId,studentId})
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    
            }});
            studentidRef.current.value='';
            alert('Student Successfully Added');
            window.location.reload();
           
        }
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/getAdminStudents/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setStudents( data.students);
         
        });
       
    },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/getCourse/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
             setCourseNam(data.course.courseName);
         
        });
    },[])
    console.log(courseNam)
   
   
    return (
        <div>
            <section>
            <h2>Assign Student ID</h2>
            <input type="text" name="" id="" placeholder='STUDENT ID'  ref={studentidRef}/>
            <button onClick={handleAddstudent}>ADD</button>
            <h2></h2>
            </section>
            <section>
            <table className="table-auto">
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Quiz</th>
      <th>Mid</th>
      <th>Final</th>
      <th>Attendance Percentage</th>
      
    </tr>
  </thead>
  <tbody>
    {
        students.map(student=><tr>
            <td>{student.studentId}</td>
            <td>{student.quiz?student.quiz:'not yet published'}</td>
            <td>{student.mid?student.mid:'not yet published'}</td>
            <td>{student.final?student.final:'not yet published'}</td>
          <td><AdminAttendance studentid={student.studentId} courseNam={courseNam}></AdminAttendance></td> 
            <Link to={`/admincourse/${courseId}/${student.studentId}`}><button>Edit</button></Link>
          </tr>)
    }
    
    
  </tbody>
</table>
            </section>
        </div>
    );
};

export default AdminClass;