import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleOAuthRedirect } from '@react-oauth/google';
import { useGoogleOneTapLogin } from 'react-google-login-api';

const UseGoogleSignIn = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSuccess = async (response) => {
    try {
      setLoading(true);
      // Send the response to your server to create a user account or authenticate the user
      const user = await fetch('/api/signup-with-google', {
        method: 'POST',
        body: JSON.stringify({ token: response.tokenId }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json());

      // Store the user object in local storage or state management
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to the desired page after successful sign-up
      history.push('/home');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const { execute: signUpWithGoogle } = useGoogleOneTapLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure: (error) => setError(error.message),
  });

  return { signUpWithGoogle, loading, error };
};

export default UseGoogleSignIn;