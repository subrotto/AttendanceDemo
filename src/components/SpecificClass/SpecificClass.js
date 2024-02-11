import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './line.css'
import LineDesign from '../LineDesign/LineDesign';




const SpecificClass = (props) => {

   const [classlist,setClasslist]=useState({});
        const classId=props.classId;
        
   useEffect(()=>{
    fetch(`http://localhost:5000/getClasses/${classId
}`)
.then(res=>res.json())
.then(classs=>setClasslist(classs))
   },[]);

   
    return (
        <div className='mt-5 '>
        <div className="flex justify-around">
          <button className="rounded-full bg-teal-200 text-teal-600 px-8 py-4 shadow-md ">
          <i class="fa-regular fa-calendar-days fa-lg"></i>  <br />
            <span className="btm-nav-label text-base">{classlist.name}</span>
          </button>
          
          <Link to={`/student/${classId}`}>
            <button className="rounded-full bg-blue-200 text-blue-600 px-8 py-4 shadow-md">
            <i class="fa-solid fa-door-open fa-lg"></i> <br />
              <span className="btm-nav-label text-base">Enter</span>
            </button>
          </Link>
          
          <Link to={`/perclassattendance/${classId}`}>
            <button className="rounded-full bg-teal-200 text-teal-600 px-8 py-4 shadow-md">
            <i class="fa-solid fa-signal fa-lg"></i> <br />
              <span className="btm-nav-label text-base">Display Attendance</span>
            </button>
          </Link>
        </div>
       <div className='mt-5'> <LineDesign></LineDesign></div>
      </div>
      
      
     
      
      

    );
    
};

export default SpecificClass;