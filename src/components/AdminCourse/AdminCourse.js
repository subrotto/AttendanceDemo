import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminCourse = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('attendance-server-flame.vercel.app/getAdminCourses')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses));
    },[]);
    return (
        <div>
           <section>ADMIN PANEL</section>
           <section> {courses.map(course=><div className='p-2 card w-80 h-auto bg-cyan-600 text-primary-content' key={course._id}>
        <div className='text-white text-3xl'>{course.courseName}</div>
        <Link to={`/admincourse/${course._id}`}>
          <button className='btn btn-nav-sm mb-2 mt-2 shadow-xl'>Enter</button>
        </Link>
      </div>)}</section>
        </div>
    );
};

export default AdminCourse;