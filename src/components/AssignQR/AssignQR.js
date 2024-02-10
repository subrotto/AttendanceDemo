import React, { useEffect, useState } from 'react';
import useFirebase from '../hooks/useFirebase';
import { getAuth,updateProfile } from 'firebase/auth';

const AssignQR = () => {
    const [inputText, setInputText] = useState('');
    const {user}=useFirebase();
    const auth=getAuth();
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Check if the input text has been previously set in local storage
    const storedInputText = localStorage.getItem('inputText');
    if (storedInputText) {
      setInputText(storedInputText);
      setIsInputDisabled(true); // Disable input if text is already set
    }
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setShowImage(!showImage);
    console.log("Input text used:", inputText);
    updateProfile(auth.currentUser,{
        displayName: inputText
      }).then(function() {
        // Update successful
        console.log("Display name updated successfully.");
      }).catch(function(error) {
        // An error occurred
        console.error("Error updating display name: ", error);
      });
    localStorage.setItem('inputText', inputText); // Store input text in local storage
    setIsInputDisabled(true); // Disable input field after using it
  };
    return (
        <div>
        <input 
            className='border-4'
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Enter Your Student ID" 
          disabled={isInputDisabled} // Disable input if isInputDisabled is true
        />
       
       {isInputDisabled==false && <button className='btn btn-outline' onClick={handleButtonClick} disabled={isInputDisabled}>Assign Student ID</button>}
        
        <div>

            {
                (user?.displayName==inputText ) && <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user?.displayName}`} alt="Try Again" />
            }

        </div>

      </div>
    );
};

export default AssignQR;