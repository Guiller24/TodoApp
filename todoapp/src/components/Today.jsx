import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskService from '../api/TaskService';
import Authenticate from '../api/AuthService';
import { AiOutlineRight } from 'react-icons/ai';

const Today = ({ showTask, setShowTask, setSelectedTask }) => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(0);
  const description = '';
  const today = new Date();
  today.setUTCHours(23, 59, 59, 999);
  const token = Authenticate.getToken();
  const userId = token.user_id;
  const todayISOString = today.toISOString();
  
  const addTask = async (e) => {
    e.preventDefault();
    console.log(token);

    const taskInfo = {
      user_id: userId,
      task,
      description,
      due_date: todayISOString,
    }

    try{
      const newTask = await TaskService.createTask(taskInfo);
      setTaskUpdated(taskUpdated + 1);
    }catch(err){
      console.error(err);
    }
  }

  const fetchSelectedTask = async (taskId) =>{
    try{
      const task = await TaskService.getTaskById(taskId);
      setSelectedTask(task.data);
    }catch(err){
      console.error(err);
    }
  }

  const fetchTasks = async () => {
    try{
      const tasks = await TaskService.getTaskByUId(userId, todayISOString);
      setTaskList(tasks.data.reverse());
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    document.title = 'Task Master | Today';
    fetchTasks();
  }, [taskUpdated]);


  return (
    <div className={`today ${showTask ? 'show-task-active' : ''}`}>
      <h1>Today</h1>
      <div className='today-input'>
          <button onClick={addTask}><FaPlus /></button>
          <input type="text" placeholder='Add New Task' className='task-inp' value={task} onChange={(e) => setTask(e.target.value)}/>
      </div>
      <div className='task-container'>
      {taskList.map((task) => (
        <div className='tasks-item' key={task.task_id} onClick={() => {
                                                                        fetchSelectedTask(task.task_id)
                                                                        setShowTask(true)
                                                                        }}>
          <p>{task.task}</p>
          <span><AiOutlineRight size={20}/></span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Today;