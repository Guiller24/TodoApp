import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskService from '../api/TaskService';

const Today = () => {
  const [task, setTask] = useState('');

  const addTask = async (e) => {
    e.preventDefault();
    
    try{
      const newTask = await TaskService.createTask(task);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='today'>
      <h1>Today</h1>
      <div className='today-input'>
          <button onClick={addTask}><FaPlus /></button>
          <input type="text" placeholder='Add New Task' className='task-inp' value={task} onChange={(e) => setTask(e.target.value)}/>
        </div>
    </div>
  )
}

export default Today;