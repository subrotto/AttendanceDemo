import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

const StudentList = () => {
    const {classId}=useParams();
    const studentRef=useRef();

    const handleStudentAdd=()=>{
        const studentId=studentRef.current.value;

        fetch(`http://localhost:4000/addStudent/${classId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({studentId})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});

        studentRef.current.value='';
        alert('Attendance Done');

    }
    return (
        <div>
             <input type="text" name="" id="" placeholder='Enter Student ID' ref={studentRef}/>
            <button onClick={handleStudentAdd}>ADD STUDENT</button>
        </div>
    );
};

export default StudentList;