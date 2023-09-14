import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Upcoming = () => {
  return (
    <div className='upcoming-page'>
      <header>
        <h1>Upcoming</h1>
        <p></p>
      </header>
      <div className='upcoming-container'>
      <div className='tom-container'>
        <h3>Tomorrow</h3>
        <div className='upcoming-input'>
          <button><FaPlus /></button>
          <input type="text" placeholder='Add New Task' className='task-inp'/>
        </div>
      </div>
      <div className='tom-container'>
        <h3>This Week</h3>
        <div className='upcoming-input'>
          <button><FaPlus /></button>
          <input type="text" placeholder='Add New Task' className='task-inp'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Upcoming;