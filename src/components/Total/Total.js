import React, { useEffect, useState } from 'react';

const Total = ({student}) => {

console.log(student);
const [totaldetails,setTotaldetails]=useState([]);

useEffect(()=>{

fetch(`http://localhost:5000/getCoursesByStudent/${student}`)
.then(res=>res.json())
.then(data=>setTotaldetails(data.courses));

},[])

    return (
        <div>
            
        </div>
    );
};

export default Total;