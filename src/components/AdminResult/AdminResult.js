import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdminResult = () => {
    const { studentId, courseId } = useParams();
    const [student,setStudent]=useState({});
    const quizRef=useRef();
    const midRef=useRef();
    const finalRef=useRef();
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`attendance-server-flame.vercel.app/getAdminStudent/${courseId}/${studentId}`)
        .then(res=>res.json())
        .then(data=>{
            // setStudent( data.student);
            setStudent(data.student)
         
        });
    },[]);

    console.log(student)
    const handleAddResult=()=>{
        let quiz,mid,final;
        student.quiz?quiz=student.quiz:quiz=quizRef.current.value;
        student.mid?mid=student.mid:mid=midRef.current.value;
        student.final?final=student.final:final=finalRef.current.value;

        if(mid!='' || quiz!='' || final!=''){
            fetch('attendance-server-flame.vercel.app/updateStudentScores', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ courseId, studentId, quiz,mid,final})
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    // Handle success if needed
                    
                  }
                });
                alert('Added Successfully');
                
        }
        else{
            alert('Enter any Score to Add');
        }
        navigate(-1);
        

    }
    return (
        <div>
            <table class="table-auto">
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Quiz</th>
      <th>Mid</th>
      <th>Final</th>
    </tr>
  </thead>
  <tbody>
    {
       <tr>
            <td>{student.studentId}</td>
            <td>{student.quiz?student.quiz:<div><input type="text" ref={quizRef}/></div>}</td>
            <td>{student.mid?student.mid:<div><input type="text" ref={midRef}/></div>}</td>
            <td>{student.final?student.final:<div><input type="text" ref={finalRef}/></div>}</td>
            <button onClick={handleAddResult}>Publish Result</button>
          </tr>
    }
    
    
  </tbody>
</table>
        </div>
    );
};

export default AdminResult;