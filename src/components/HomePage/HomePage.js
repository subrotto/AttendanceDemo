import React, { createContext, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Login from '../Login/Login';

export const MyContext=createContext('mydrills');

const HomePage = () => {

    
    return (
       
        <div>
        
        </div>
       
    );
};

export default HomePage;


{/* <form onSubmit={handleSubmit}>
           <label htmlFor="email">E-mail : </label>
            <input onChange={handleEmail} type="email" name="" id="" />
            <br />
            <label htmlFor="password">Password : </label>
            <input onChange={handlePassword} type="password" name="" id="" />
            <br />
           
           {isLogin?<input onClick={creatingUsingEmailPassword} type="submit" value="Register" />:<input onClick={signinUsingEmailPassword} type="submit" value="Login" />}
           
           
          
           </form> */}