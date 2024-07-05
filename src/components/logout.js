import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      // Send request to backend to logout
      await axios.post('http://127.0.0.1:8000/api/logout/');
      
      // Clear authentication token from local storage
      localStorage.removeItem('accessToken');
      
      // Redirect to landing page
      history.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
   <>{handleLogout()}</>
  );
};

export default Logout;
