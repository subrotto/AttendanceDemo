import React, { useContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link } from 'react-router-dom';
import HomePage, { MyContext } from '../HomePage/HomePage';
import './header.css';
import Dropdownmenu from '../Dropdownmenu/Dropdownmenu';

// ......................................................................
  
const Header = () => {
    const {user,logout}=useFirebase();
   
    console.log(user)
    return (
    <div>
      <img src="https://hstu.ac.bd/img/hstu-banner_view.jpg" alt="" />
        <div className="navbar "style={{ backgroundColor: '#83CAEA' }}>

          
  <div className="navbar-start">
   
 <Dropdownmenu></Dropdownmenu>
  
  </div>
  <div className="navbar-center">
    
<Link to='/'>  <a href="" className="btn btn-outline">HSTU Attendance System</a></Link>

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






  
  {user?.email ? <button className="btn btn-outline"onClick={logout}>Log Out</button>: <button className='btn btn-outline'> <Link to='/login'>LogIn</Link></button> }
  </div>
  
</div>
</div>
       
    );
};

export default Header;