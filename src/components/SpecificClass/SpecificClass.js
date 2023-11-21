import React, { useEffect } from 'react';

const SpecificClass = (props) => {

   
        const classId=props.classId;
   useEffect(()=>{
    fetch(`http://localhost:4000/getClasses/${classId
}`)
.then(res=>res.json())
.then(classs=>console.log(classs))
   },[classId])
    return (
        <div>
            
        </div>
    );
};

export default SpecificClass;