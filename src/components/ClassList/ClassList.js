import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificClass from '../SpecificClass/SpecificClass';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    
    const [selectedDate, setSelectedDate] = useState(null); 
    const handleClassAdd=()=>{
        
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
        
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/getCourses/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses( data.classes);
         
        });
    },[courseId]);

    
    
    
    return (
        
        <div className='mb-48'  >
            <ReactDatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" // Change the date format here
                placeholderText="Select class date"
                className="border border-gray-300 rounded p-2 shadow-md"
            />
            <button className='btn btn-outline shadow-xl mt-5 mb-5 ml-5' onClick={handleClassAdd}>ADD CLASS</button>
    
            {
                classes.map(classId=><SpecificClass key={classId} classId={classId}></SpecificClass>) 
            }
        </div>
    )
    ;
};

export default ClassList;