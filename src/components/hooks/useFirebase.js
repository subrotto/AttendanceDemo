import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useNavigate } from "react-router-dom";




initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const googleProvider=new GoogleAuthProvider();
    const auth=getAuth();
    const navigate=useNavigate();

   const signinUsingGoogleforTeacher=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user);
        navigate('/courselist');
    }).catch(err=>{
        setError(err.message);
    })
    
   }

   const creatingUsingEmailPassword=(email,password,profession)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user);
        
    }).catch(err=>{
        setError(err.message);
    })
    alert('SigUp Successfull');
    if(profession=='teacher'){
        navigate('/courselist');
    }
    else{
        navigate('/stucourselist');
    }
        
}
   const signinUsingEmailPassword=(email,password,profession)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user);
        
    }).catch(err=>{
        setError(err.message);
        alert('Your Email or Password is wrong,try again.')
    })
   
    
}

   const signinUsingGoogleforStudent=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user);
        navigate('/stucourselist');
    }).catch(err=>{
        setError(err.message);
    })

    
   }
   const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser({});
        navigate('/login');
    })
   }

   useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
   },[])

    return {
        signinUsingGoogleforTeacher,
        signinUsingGoogleforStudent,
        signinUsingEmailPassword,
        creatingUsingEmailPassword,
        user,
        setUser,
        error,
        logout
    }
}

export default useFirebase;