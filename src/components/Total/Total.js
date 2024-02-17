import React, { useEffect, useState } from 'react';

const Total = ({student}) => {

console.log(student);
const [totaldetails,setTotaldetails]=useState([]);
const [courseslist,setCourseslist]=useState([]);

useEffect(()=>{

fetch(`http://localhost:5000/getCoursesByStudent/${student}`)
.then(res=>res.json())
.then(data=>setTotaldetails(data.courses));


fetch('http://localhost:5000/getCourses')
.then(res=>res.json())
.then(data=>setCourseslist(data.courses));

},[]);

    return (
        <div>
            
         <table className="table table-lg">
    <thead>
    
      <tr>
        <th>{student}</th> 
        {totaldetails.map(totalOne=><span><th><button className="btn">
        {totalOne.name}
  <div className="badge  backdrop-grayscale-0">{totalOne.classes.length}</div>
  
</button></th> 
        </span>)}
      </tr>
    </thead> 
    
   
  </table>  
        </div>
    );
};

export default Total;