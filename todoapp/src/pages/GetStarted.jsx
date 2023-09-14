import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNav }  from '../utils/Navigate';

const GetStarted = () => {
  const { SignUp } = useNav();

  useEffect(() =>{
    document.title = 'Get Started';
  });
  return (
    <div className='pages get-started'>
      <div className='side-1'></div>
      <div className='start-container'>
      <h1 className='title'>Task Master</h1>
      <p className='tagline'>
        Your Ultimate Task Manager for Mastering Productivity.
      </p>
      <button className='get-started-btn' onClick={() => SignUp()}>Get Started</button>
      <p>Already have an account? <Link to='/login'>Sign In</Link></p>
      </div>
    </div>
  )
}

export default GetStarted;