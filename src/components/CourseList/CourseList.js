import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [courses,setCourses]=useState([]);
    const courseRef=useRef();

    const handleCourseAdd=()=>{
        
        const courseName=courseRef.current.value;
        fetch('http://localhost:4000/addCourse',{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({courseName})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }
        });

        courseRef.current.value='';
                alert('Course Successfully Added');

    }

    useEffect(()=>{
        fetch('http://localhost:4000/getCourses')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses));
    },[])
    
    return (
        <div>
            <input type="text" name="" id="" placeholder='Course-Code' ref={courseRef}/>
            <button onClick={handleCourseAdd}>ADD COURSE</button>

        {
        courses.map(course=><div key={course._id}>
            {course.name}
            
            <Link to={`/class/${course._id}`}><button>Enter</button></Link>
        </div>)
        
        }

        </div>
    );
};

export default CourseList;