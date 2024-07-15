import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleEmail=(e)=>{
        setEmail(e.target.value);
   }
   const handlePassword=(e)=>{
        setPassword(e.target.value);
   } 


const signinUsingEmailPassword=()=>{
        if(email=='admin' && password=='1234'){
            navigate('/admincourse');
        }
        else{
            alert("Your Username or Password is incorrect.Try Again")
        }
}

    return (
        <div>
            <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin UserID</span>
          </label>
          <input onChange={handleEmail}  type="text" placeholder="UserName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handlePassword} type="text" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>signinUsingEmailPassword()} className="btn btn-outline">Login</button>
        </div>
      </form>
        </div>
    );
};

export default AdminLogin;