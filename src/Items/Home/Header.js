import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Home/Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };
  const menueItems = <>
    <li><Link className='text-white' to="home">Home</Link></li>
    <li><Link className='text-white' to="service">Services</Link></li>
    <li><Link className='text-white' to="blogs">Blogs</Link></li>
    <li><Link className='text-white' to="portfolio">My Portfolio</Link></li>
    {user && <li><Link className='text-white' to="dashboard">Dashboard</Link></li>}
    <li>{user ? <button className='text-white' onClick={logout} >Sign Out</button> : <Link className='text-white' to="login">LogIn</Link>}</li>
  </>
  return (
    <div className="navbar bg-gradient-to-r from-violet-800 via-indigo-300 to-violet-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menueItems}
          </ul>
        </div>
        <Link to="home" className="btn btn-ghost normal-case text-xl text-white">Car Component's</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menueItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;