import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StuCourseList = () => {
    const [courses,setCourses]=useState([]);
    const [searchtext,setSearchtext]=useState('');
    const searchOptions=(word)=>{
        setSearchtext(word);
}
    useEffect(()=>{
        fetch('http://localhost:5000/getCourses')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses));
    },[])
    
    return (
        <div>
            <input className='border-4 mt-4' onChange={(e)=>searchOptions(e.target.value)} type="text" name="" id="" placeholder='Search to Filter Options'/>
            
            <br />
            <div className='mt-12 ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
        searchtext==''?courses.map(course=><div className='p-2 card w-80 h-auto bg-cyan-600 text-primary-content' key={course._id}>
        <div className='text-white text-3xl'>{course.name}</div>
        <Link to={`/stuclass/${course._id}`}>
          <button className='btn btn-nav-sm mb-2 mt-2 shadow-xl'>Enter</button>
        </Link>
      </div>):courses.filter(course => 
        course.name.toLowerCase().includes(searchtext.toLowerCase())
      ).map(course=><div className='p-2 card w-80 h-auto bg-cyan-600 text-primary-content' key={course._id}>
          <div className='text-white text-3xl'>{course.name}</div>
          <Link to={`/stuclass/${course._id}`}>
            <button className='btn btn-nav-sm mb-2 mt-2 shadow-xl'>Enter</button>
          </Link>
        </div>)
        
        }
        </div>

        </div>
    );
};

export default StuCourseList;