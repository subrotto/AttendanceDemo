import React, { useState } from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

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
          <div>
           <p className='clockwise-animation text-xl' style={{ backgroundColor: 'red',color: 'white'  }}> 
                       <span> এই লগ-ইন সেকশনটি শুধু মাত্র শিক্ষকদের জন্য প্রযোজ্য  </span></p>
          </div>       
           
           
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
          <button onClick={()=>signinUsingEmailPassword(email,password,profession)} className="btn btn-outline">Login</button>
        </div>
      </form>
       
      <div>
          <Link to='/registration'><button  className="btn mx-8">SignUp</button></Link>
        </div>

      
           <div className='justify-center align-middle'> 
           <div className='mt-5'><button onClick={signinUsingGoogleforTeacher}>Sign in With Google</button> <div><i className=" m-2 fa-brands fa-google"onClick={signinUsingGoogleforTeacher}></i></div></div>
           </div>
          


        </div>
    );
};

export default Login;