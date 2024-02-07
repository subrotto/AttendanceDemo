import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user,logout}=useFirebase();
    return (
        <div>
            <Link to='/courselist'>CourseList</Link>
            <span>{user?.displayName}</span>
            {user?.email ? <button onClick={logout}>Logout</button>:<Link to='/'>LogIn</Link>}
        </div>
    );
};

export default Header;