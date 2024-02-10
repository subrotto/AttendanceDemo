import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificClass from '../SpecificClass/SpecificClass';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    const classRef=useRef();
    const [selectedDate, setSelectedDate] = useState(null); 
    const handleClassAdd=()=>{
        const className=classRef.current.value;
       const classDate=new Date(selectedDate)
        console.log(classDate)
        fetch(`http://localhost:5000/addClass/${courseId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({date: classDate})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});
            setSelectedDate('');
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
            <ReactDatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" // Change the date format here
                placeholderText="Select class date"
            />
    
            {
                classes.map(classId=><SpecificClass key={classId} classId={classId}></SpecificClass>) 
            }
        </div>
    )
    ;
};

export default ClassList;