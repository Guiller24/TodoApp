import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNav } from '../utils/Navigate';
import Authenticate from '../api/AuthService';

const Login = ({ isAuth, setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Main } = useNav();

  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      const token = await Authenticate.authUser(email, password);
      localStorage.setItem("token", token);

      setIsAuth(true);
      Main();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    document.title = 'Sign in'
    if(isAuth){
      Main();
    }
  }, [isAuth]);

  return (
    <div className='pages login'>
      <form onSubmit={handleLogin} className='login-form'>
        <h1>Sign In</h1>
        <input type='text' placeholder='Email...' className='login-input' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type='password' placeholder='Password...' className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button className='login-btn' type='submit'>Sign in</button>
        <p>
          Dont have an account?  
          <Link to='/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;