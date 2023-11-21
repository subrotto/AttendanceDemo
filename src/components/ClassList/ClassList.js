import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    const classRef=useRef();

    const handleClassAdd=()=>{
        const className=classRef.current.value;

        fetch(`http://localhost:4000/addClass/${courseId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({className})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});

        classRef.current.value='';
    }

    useEffect(()=>{
        fetch(`http://localhost:4000/getCourses/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses((prevClasses) => [...prevClasses, ...data.classes]);
         
        });
    },[courseId]);

    console.log(classes)
    
    

    return (
        <div>
             <input type="text" name="" id="" placeholder='Class Date' ref={classRef}/>
            <button onClick={handleClassAdd}>ADD CLASS</button>

            {
                classes.map(cls=><div>
                    {cls.length}
                </div>)
            }

        </div>
    );
};

export default ClassList;