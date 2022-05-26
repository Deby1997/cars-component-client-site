import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {

    errorElement = <div>
      <p className='text-danger'>Error: {error.message}</p>
    </div>

  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate('/home');
  }
  return (
    <div>
      {errorElement}
      <button onClick={() => signInWithGoogle()} class="btn btn-wide">Sign Up With Google</button>
    </div>
  );
};

export default Social;