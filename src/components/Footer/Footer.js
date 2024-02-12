import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* University Information */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">The University</h2>
          <ul>
            <li><a href="#">About HSTU</a></li>
            <li><a href="#">Exam Results</a></li>
            <li><a href="#">HSTU Wikipedia</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Academic Information */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">Academic</h2>
          <ul>
            <li><a href="#">Faculties & Departments</a></li>
            <li><a href="#">Undegraduate Programme</a></li>
            <li><a href="#">Postgraduate Programme</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">Useful Links</h2>
          <ul>
            <li><a href="#">Admission</a></li>
            <li><a href="#">IQAC</a></li>
            <li><a href="#">JST</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p>Hajee Mohammad Danesh Science and Technology University (HSTU),</p>
          <p>Dinajpur-5200, Bangladesh</p>
          <p>Phone: 01795229598</p>
          {/* Add more contact information as needed */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p>&copy; 2024 Copyright Hajee Mohammad Danesh Science and Technology University</p>
        <p>Powered by: Subroto , Parvej & Sabbir</p>
      </div>
    </footer>
  );
};

export default Footer;
