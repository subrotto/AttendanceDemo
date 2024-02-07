import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


const HomePage = () => {
const {user,setUser,signinUsingGoogleforStudent,signinUsingGoogleforTeacher,signinUsingEmailPassword}=useFirebase();

    const [profession,setProfession]=useState('');
    const [isLogin,setIsLogin]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    
    const [error,setError]=useState('');
    const auth=getAuth();
    const handleSubmit=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            navigate('/courselist');
        }).catch(err=>{
            setError(err.message);
        })
    }
    const professionHandle=(e)=>{
        setProfession(e.target.value);

    }
    const toggleLogin=(e)=>{
            setIsLogin(e.target.checked);
    }
  
   const handleEmail=(e)=>{
        setEmail(e.target.value);
   }
   const handlePassword=(e)=>{
        setPassword(e.target.value);
   } 
    
    return (
        <div>
        


            <h3>Please {isLogin?<span>Register</span>:<span>Login</span>}</h3>
           <form onSubmit={handleSubmit}>
           <label htmlFor="email">E-mail : </label>
            <input onChange={handleEmail} type="email" name="" id="" />
            <br />
            <label htmlFor="password">Password : </label>
            <input onChange={handlePassword} type="password" name="" id="" />
            <br />
           
           {isLogin?<input type="submit" value="Register" />:<input type="submit" value="Login" />}
           
           
          
           </form>
           

           <select name="" id="" onChange={professionHandle}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
           </select>
           <br />
           <input onChange={toggleLogin} type="checkbox" name="" id=""  />
           <label htmlFor="">New User.Not Registered</label>
           <br />
            {profession=='teacher'?<button onClick={signinUsingGoogleforTeacher}>Sign in With Google</button>:<button onClick={signinUsingGoogleforStudent}>Sign in With Google</button>}
        </div>
    );
};

export default HomePage;