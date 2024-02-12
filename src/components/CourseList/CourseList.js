import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
const CourseList = () => {
    const [courses,setCourses]=useState([]);
    const courseRef=useRef();
    const [searchtext,setSearchtext]=useState('');
    const {user}=useFirebase();
    const userEmail=user?.email;
    console.log(userEmail)
    const handleCourseAdd = () => {
        const courseName = courseRef.current.value;
        if (courseName) {
          fetch('http://localhost:5000/addCourse', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseName, userEmail })
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                // Handle success if needed
                
              }
            });
      
          courseRef.current.value = '';
          alert('Course Successfully Added');
        } else {
          alert('Please Enter a Course Name');
        }
        window.location.reload();
      }
      

    const searchOptions=(word)=>{
            setSearchtext(word);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/getCourses')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses));
    },[])
    
    
    return (
        <div className='mt-10 mb-44 '>
            <input className='input border border-base-300 shadow-xl' onChange={(e)=>searchOptions(e.target.value)} type="text" name="" id="" placeholder='Search to filter course '  />
          
            
            <br />


  


              
         <div className=' items-center m-4 gap-2'>

         
       <div>
        <div className='mb-4'>
  <input
    className='input border border-base-300 shadow-xl'
    type="text"
    name=""
    id=""
    placeholder='Course-Code'
    ref={courseRef}
  />
  
</div>



           
          <button className='btn btn-outline shadow-lg' onClick={handleCourseAdd}>
    ADD COURSE
  </button>
       </div>
           
         </div>

         <div className='mt-12 ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
  {
    searchtext === '' ? 
    courses
      .filter(course => course.email === userEmail)
      .map(course =>
        <div className='p-2 card w-80 h-auto bg-cyan-600 text-primary-content shadow-xl' key={course._id}>
          <div className='text-white text-3xl'>{course.name}</div>
          <Link className='' to={`/class/${course._id}`}>
            <button className='btn btm-nav-sm mb-2 mt-2 shadow-xl'>Enter</button>
          </Link>
        </div>
      ) :
    courses
      .filter(course => course.email === userEmail)
      .filter(course => course.name.toLowerCase().includes(searchtext.toLowerCase()))
      .map(course =>
        <div className='p-2 card w-80 h-auto bg-cyan-600 text-primary-content' key={course._id}>
          <div className='text-white text-3xl'>{course.name}</div>
          <Link to={`/class/${course._id}`}>
            <button className='btn btn-nav-sm mb-2 mt-2 shadow-xl'>Enter</button>
          </Link>
        </div>
      )
  }
</div>



   







        </div>
    );
};

export default CourseList;