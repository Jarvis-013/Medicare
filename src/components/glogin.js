import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const GoogleLogin = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const responseGoogle = async (response) => {
    try {
      const token = response.tokenId;
      const res = await axios.post('http://localhost:8000/api/google-login/', { token });
      setUserInfo(res.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error logging in with Google. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {userInfo && (
        <div>
          <h3>Welcome back, {userInfo.name}!</h3>
          <p>Email: {userInfo.email}</p>
          {/* Redirect user or perform other actions */}
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
