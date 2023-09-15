import React, { useEffect, useState } from 'react';
import TaskService from '../api/TaskService';
import { RxCross2 } from 'react-icons/rx';
const FullTaskView = ({ selectedTask, showTask, setShowTask }) => {


  return (
    <div className={`task-view ${showTask ? 'show-task' : ''}`}>
        <div className='task-head'>
          <h3>Task</h3>
          <button onClick={() => setShowTask(false)} className='menu-close'>
            <RxCross2 size={25} />
          </button>
        </div>
          <div>
            <h4>{selectedTask.task}</h4>
          </div>
    </div>
  )
}

export default FullTaskView