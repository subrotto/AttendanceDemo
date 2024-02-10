import React, { useContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link } from 'react-router-dom';
import HomePage, { MyContext } from '../HomePage/HomePage';
import './header.css';

// ......................................................................
  
const Header = () => {
    const {user,logout}=useFirebase();
    const [profession,setProfession]=useContext(MyContext);
    console.log(user)
    return (
        <div className="navbar bg-base-300">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      
    </div> */}
    <details className="dropdown">
  <summary className="m-1 btn btn-outline">Menu</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a><Link to='/'>Homepage</Link></a></li>
    <li><a> <Link to='/courselist'>CourseList</Link></a></li>
    <li><a><Link to='/assignqr'>Assign my Student ID</Link></a></li>
  </ul>
</details>
    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <Link to='/'>Homepage</Link>
        {profession=='teacher'?<Link to='/courselist'>CourseList</Link>:<Link to='/stucourselist'>CourseList</Link>}
        
        <Link to='/'>Homepage</Link>
      </ul> */}
  </div>
  <div className="navbar-center">
    
  <button className="btn glass">HSTU Attendance System</button>
  </div>
  <div className="navbar-end gap-2">
    <div className="avatar gap-2">
    <div className="avatar online">
  <div className="w-7 rounded-full">
    {
      user?.email && <img src={user?.photoURL} />
    }
    
  </div>
</div>

  {user?.email}
</div>






  
  {user?.email ? <button className="btn btn-outline"onClick={logout}>Log Out</button>:<Link to='/login'>LogIn</Link>}
  </div>
  
</div>
       
    );
};

export default Header;