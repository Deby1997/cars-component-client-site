import React from 'react';
import Social from './Social';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // Get Input Values
  const handleEmailInput = event => {
    setEmail(event.target.value);
  }
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  }


  const handleLog = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleRegister = event => {

    navigate('/signup');
  }
  let errorElement;
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from])
  if (error) {

    errorElement = <div>
      <p className='text-danger'>Error: {error.message}</p>
    </div>

  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <form onSubmit={handleLog}>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Login now!</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input onBlur={handleEmailInput} type="email" name='email' id="email" placeholder="Enter email" required class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input onBlur={handlePasswordInput} type="password" id="password" name='password' required placeholder="password" class="input input-bordered" />
                  <label class="label">
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button type='submit' class="btn btn-primary">Login</button>
                  {errorElement}
                </div>
                <div className='text-center'>
                  <p>New here?<span type="submit" className='text-green-400' onClick={handleRegister}>Please Sign Up</span></p>
                  <div class="divider">OR</div>
                  <Social></Social>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default LogIn;