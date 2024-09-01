import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineDesign from '../LineDesign/LineDesign';

const StuSpecificClass = (props) => {

   const [classlist,setClasslist]=useState({});
        const classId=props.classId;
        
   useEffect(()=>{
    fetch(`attendance-server-flame.vercel.app/getClasses/${classId
}`)
.then(res=>res.json())
.then(classs=>setClasslist(classs))
   },[]);

   
    return (
        <div>
            <div className='flex justify-around'>
            <button className="rounded-full bg-teal-200 text-teal-600 px-8 py-4 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="btm-nav-label text-base">{classlist.name}</span>
          </button>
            
            
          <Link to={`/perclassattendance/${classId}`}>
            <button className="rounded-full bg-teal-200 text-teal-600 px-8 py-4 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <span className="btm-nav-label text-base">Display Attendance</span>
            </button>
          </Link>
          <div className='mt-5'> <LineDesign></LineDesign></div>
        </div>
        <div className='mt-5'> <LineDesign></LineDesign></div>
        </div>
    );
};

export default StuSpecificClass;