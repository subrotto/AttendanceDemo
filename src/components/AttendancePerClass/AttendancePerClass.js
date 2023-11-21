import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AttendancePerClass = () => {
const {classId}=useParams();
const [classlist,setClasslist]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/getClasses/${classId
    }`)
    .then(res=>res.json())
    .then(classs=>setClasslist(classs))
       },[]);
       console.log(classlist)
    return (
        <div>
            
        </div>
    );
};

export default AttendancePerClass;