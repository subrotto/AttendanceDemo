import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificStudentProfile from '../SpecificStudentProfile/SpecificStudentProfile';

const StudentProfile = () => {
    const {studentid}=useParams();
    const [attendedlist,setAttendedlist]=useState([]);
    console.log(studentid)
    useEffect(()=>{
        fetch(`http://localhost:5000/getCoursesWithScores/${studentid}`)
        .then(res=>res.json())
        .then(data=>{
            setAttendedlist( data.courses);
         
        });
    },[]);

    return (
        <div>
            {attendedlist.map(attendedstu=><div>Course:{attendedstu.courseName} Quiz Number:{attendedstu.quiz?attendedstu.quiz:'Not Yet Published'} Mid Number:{attendedstu.mid?attendedstu.mid:'Not Yet Published'} Final Number:{attendedstu.final?attendedstu.final:'Not Yet Published'} <SpecificStudentProfile studentid={studentid} courseNam={attendedstu.courseName}></SpecificStudentProfile></div>)}
        </div>
    );
};

export default StudentProfile;