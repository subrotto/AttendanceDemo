import React, { useEffect, useState } from 'react';
import Total from '../Total/Total';

const TotalAttendance = () => {

    const [totalstudent,setTotalstudent]=useState([]);


    useEffect(()=>{

            fetch('http://localhost:5000/getUniqueStudentIds')
            .then(res=>res.json())
            .then(data=>setTotalstudent(data.studentIds));

    },[])

    return (
        <div>
            {totalstudent.map(student=><Total student={student}></Total>)}
        </div>
    );
};

export default TotalAttendance;