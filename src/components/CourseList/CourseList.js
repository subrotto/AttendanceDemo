import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const CourseList = () => {
    const [courses,setCourses]=useState([]);
    const courseRef=useRef();
    const [searchtext,setSearchtext]=useState('');
    const handleCourseAdd=()=>{
        
        const courseName=courseRef.current.value;
        if(courseName){
            fetch('http://localhost:5000/addCourse',{
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
        else{
            alert('Please Enter a Course Name');
        }
        

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
        <div className='mt-10 '>
            <input className='input border border-base-300' onChange={(e)=>searchOptions(e.target.value)} type="text" name="" id="" placeholder='Search to filter course '  />
          
            
            <br />


  


              
         <div className=' items-center m-4 gap-2'>

         
       <div>
        <div className='mb-4'>
  <input
    className='input border border-base-300'
    type="text"
    name=""
    id=""
    placeholder='Course-Code'
    ref={courseRef}
  />
  
</div>



           
          <button className='btn btn-outline' onClick={handleCourseAdd}>
    ADD COURSE
  </button>
       </div>
           
         </div>

        <div className='mt-12 '>
        {
        searchtext==''?courses.map(course=><div className='p-12 border-2 border-lime-500' key={course._id}>
           <div>
           {course.name}
           </div>
            
            <Link className='mt-24' to={`/class/${course._id}`}><button>Enter</button></Link>
        </div>):courses.filter(course => 
        course.name.toLowerCase().includes(searchtext.toLowerCase())
      ).map(course=><div className='p-12 border-2 border-lime-500' key={course._id}>
            {course.name}
            
            <Link to={`/class/${course._id}`}><button>Enter</button></Link>
        </div>)
        
        }
        </div>
   







        </div>
    );
};

export default CourseList;