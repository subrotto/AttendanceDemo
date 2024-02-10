import React, { useState } from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const {user,setUser,signinUsingGoogleforStudent,signinUsingGoogleforTeacher,signinUsingEmailPassword,creatingUsingEmailPassword}=useFirebase();

    const [profession,setProfession]=useState('teacher');
    const [isLogin,setIsLogin]=useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    
    const [error,setError]=useState('');
    
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

   if(user?.email){
    if(profession=='teacher'){
        navigate('/courselist');
    }
    else{
        navigate('/stucourselist');
    }
   }

    return (
        <div>
            <select name="" id="" onChange={professionHandle}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
           </select>
           <br />
            <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handleEmail}  type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handlePassword} type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>signinUsingEmailPassword(email,password,profession)} className="btn btn-primary">Login</button>
        </div>
      </form>
       
      <div>
          <Link to='/registration'><button  className="btn mx-8">SignUp</button></Link>
        </div>

      
           
            {profession=='teacher'?<button onClick={signinUsingGoogleforTeacher}>Sign in With Google</button>:<button onClick={signinUsingGoogleforStudent}>Sign in With Google</button>}

        </div>
    );
};

export default Login;