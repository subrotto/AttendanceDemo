import React, { useEffect, useState } from 'react';
import Total from '../Total/Total';

const TotalAttendance = () => {

    const [totalstudent,setTotalstudent]=useState([]);


    useEffect(()=>{

            fetch('attendance-server-flame.vercel.app/getUniqueStudentIds')
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