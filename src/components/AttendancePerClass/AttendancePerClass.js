import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AttendancePerClassOnePerson from '../AttendancePerClassOnePerson/AttendancePerClassOnePerson';

const AttendancePerClass = () => {
const {classId}=useParams();
const [studentlist,setStudentlist]=useState([]);


    useEffect(()=>{
        fetch(`attendance-server-flame.vercel.app/getClasses/${classId
    }`)
    .then(res=>res.json())
    .then(classs=>setStudentlist(classs.students))
       },[]);
       
    return (
        <div className='mt-5 mb-48'>
            <button className="btn">
            Total Students :
  <div className="badge">{studentlist.length}</div>
</button>
           
          
         <div className='mt-5'>   {
                studentlist.map(student=><AttendancePerClassOnePerson studentId={student}></AttendancePerClassOnePerson>)
            }</div>
        </div>
    );
};

export default AttendancePerClass;