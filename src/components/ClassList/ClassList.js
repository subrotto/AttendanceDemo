import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificClass from '../SpecificClass/SpecificClass';
import ReactDatePicker from 'react-datepicker';

const ClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    const classRef=useRef();
    const [selectedDate, setSelectedDate] = useState(null); 
    const handleClassAdd=()=>{
        const className=classRef.current.value;

        fetch(`http://localhost:5000/addClass/${courseId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});

        classRef.current.value='';
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/getCourses/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses( data.classes);
         
        });
    },[courseId]);

    
    
    

    return (
        <div>
             <input type="text" name="" id="" placeholder='Class Date' ref={classRef}/>
            <button onClick={handleClassAdd}>ADD CLASS</button>
            <ReactDatePicker // Datepicker component
                selected={selectedDate} // Set the selected date
                onChange={date => setSelectedDate(date)} // Handle date selection
                dateFormat="yyyy/MM/dd" // Format of the selected date
                placeholderText="Select class date" // Placeholder text for the input field
            />

            {
               classes.map(classId=><SpecificClass key={classId} classId={classId}></SpecificClass>) 
            }

        </div>
    );
};

export default ClassList;