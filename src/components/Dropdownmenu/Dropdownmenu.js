import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Dropdownmenu = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const {user}=useFirebase();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-start">
      <details className="dropdown" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <summary className="m-1 btn btn-outline"><i className="fa-solid fa-bars fa-lg"></i></summary>
        {isOpen && (
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className='text-xl'><Link to='/'>Homepage</Link></li>
            <hr />
            {user?.email ? <li className='text-xl' ><Link to='/courselist'>CourseList</Link></li> : <li><Link to='/stucourselist'>CourseList</Link></li>}
          </ul>
        )}
      </details>
    </div>
  );
};

export default Dropdownmenu;
