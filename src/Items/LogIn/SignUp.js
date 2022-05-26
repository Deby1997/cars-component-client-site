import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from './Social';

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }

  const handleRegister = event => {

    navigate('/login');
  }
  const handleReg = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;
    const name = event.target.name.value;
    if (agree) {
      createUserWithEmailAndPassword(email, password, name);
    }
  }
  return (
    <div>
      <form onSubmit={handleReg}>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">SignUp now!</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input type="name" name="name" placeholder="name" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="password" name="pass" placeholder="password" class="input input-bordered" required />
                  <label class="label">
                  </label>
                </div>
                <div class="form-control mt-6">
                  <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                  <label className={agree ? 'text-blue-500' : 'text-red-500'}>Accept tearms & conditions.</label> <br />
                  <button disabled={!agree} type="submit" class="btn btn-primary">Sign Up</button>
                </div>
                <div className='text-center'>
                  <p>Already had an account?<span type="submit" className='text-green-400' onClick={handleRegister}>Please LogIn</span></p>
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

export default SignUp;