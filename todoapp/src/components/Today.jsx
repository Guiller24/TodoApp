import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskService from '../api/TaskService';
import Authenticate from '../api/AuthService';

const Today = () => {
  const [task, setTask] = useState('');
  const description = '';
  const addTask = async (e) => {
    e.preventDefault();
    const today = new Date();
    today.setUTCHours(23, 59, 59, 999);
    const token = Authenticate.getToken();
    console.log(token);

    const taskInfo = {
      user_id: token.user_id,
      task,
      description,
      due_date: today.toISOString(),
    }
    console.log(taskInfo)
    
    try{
      const newTask = await TaskService.createTask(taskInfo);
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
      {}
    </div>
  )
}

export default Today;