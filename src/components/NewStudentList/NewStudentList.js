import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminAttendance from '../AdminAttendance/AdminAttendance';

const NewStudentList = () => {
    const {coursenam}=useParams();
    const [stuforcourse,setStuforcourse]=useState([]);
   
    useEffect(()=>{
        fetch(`attendance-server-flame.vercel.app/getStudentIdsByCourseName/${coursenam}`)
        .then(res=>res.json())
        .then(data=>{
            setStuforcourse( data.studentIds);
         
        });
    },[])
    console.log(stuforcourse)
    return (
        <div>
            
            {stuforcourse.map(stu=><div className='mb-4'>{stu} {<AdminAttendance studentid={stu} courseNam={coursenam}></AdminAttendance>}</div>)}
        </div>
    );
};

export default NewStudentList;