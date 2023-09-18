import React, { useEffect, useState } from 'react';
import TaskService from '../api/TaskService';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa';
const FullTaskView = ({ selectedTask, showTask, setShowTask }) => {
  const timestamp = selectedTask.due_date;
  const date = new Date(timestamp);
  

  const due_date = date.toLocaleString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });


  return (
    <div className={`task-view ${showTask ? 'show-task' : ''}`}>
        <div className='task-head'>
          <h2>Task:</h2>
          <button onClick={() => setShowTask(false)} className='menu-close'>
            <RxCross2 size={25} />
          </button>
        </div>
          <div>
            <p className='task-title'>{selectedTask.task}</p>
            <p className='task-description'>{selectedTask.description ? selectedTask.description : 'Description'}</p>
            
            <div className='full-list-container'> 
              <p>List</p>
              <select name="List" id="list">
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              </select>
            </div>
            <div className='due-date-container'>
              <p>Due date</p>
              <p className='due-date'>{due_date}</p>
            </div>
            <div className='full-tags-container'>
              <p>Tags</p>
              <button className='add-tag-btn'>
                <FaPlus />
                Add Tag
              </button>
            </div>
            <div className='footer-list-container'>
              <button className='delete-task'>Delete Task</button>
              <button className='save-task'>Save Changes</button>
            </div>
          </div>
    </div>
  )
}

export default FullTaskView