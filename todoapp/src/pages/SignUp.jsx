import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../api/UserService';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = {
          username,
          firstname,
          lastname,
          email,
          password,
        };
      
        try {
          const response = await UserService.createUser(userInfo);
          console.log(response);
          setUsername("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setConfirm("");
        } catch (error) {
          console.error(error);
        }
    }

  useEffect(() =>{
    document.title = 'Sign Up';
  });
  
  return (
    <div className='pages sign-up'>
        <form onSubmit={handleSubmit} className='signup-form'>
            <h1>Sign up</h1>
            <input type="text" placeholder='Username...' className='signup-input' value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input type="text" placeholder='First Name...' className='signup-input' value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
            <input type="text" placeholder='Last Name...' className='signup-input' value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
            <input type="text" placeholder='Email...' className='signup-input' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder='Password...' className='signup-input' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <input type="password" placeholder='Confirm Password...' className='signup-input' value={confirm} onChange={(e) => setConfirm(e.target.value)} required/>
            <button type='submit' className='signup-btn'>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </form>
    </div>
  )
}

export default SignUp;