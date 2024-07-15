import React, { useEffect, useState } from 'react';

const AdminAttendance = (props) => {
    const {studentid,courseNam}=props;
    const [attend,setAttend]=useState(null)
    let percentage=0;
    useEffect(()=>{
        fetch(`http://localhost:5000/getCoursesAndAttendance/${studentid}`)
        .then(res=>res.json())
        .then(data=>{
             setAttend(data.coursesWithAttendance);
         
        });
    },[])
    if(attend){
            const attendinfo=attend.find(c => c.courseName === courseNam);
            percentage=(attendinfo.attendedClasses/attendinfo.totalClasses)*100;
    }
    return (
        <div>
            {percentage}% <br /> Eligibility:{percentage>=60?'YES':'NO'}
        </div>
    );
};

export default AdminAttendance;