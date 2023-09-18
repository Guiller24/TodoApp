import React, { useState } from 'react'
import Authenticate from '../api/AuthService';
import ListService from '../api/ListService';
const AddList = ({ showAddList }) => {
  const [list, setList] = useState('');
  const userId = Authenticate.getToken().user_id;
  const listInfo = {
    userId,
    list,
  }
  const addList = async () => {
    try{
      const newTask = await ListService.createList(listInfo);
      setList('');
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='add-list'>
        <div className={`add-list-container ${showAddList ? 'show' : ''}`}>
            <h3>Add List</h3>
            <div className='list-input-container'>  
              <input type='text' placeholder='Add List...' className='list-input' value={list} onChange={(e) => setList(e.target.value)}/>
              <button className='list-btn' onClick={addList}>Add</button>
            </div>  
        </div>
    </div>
  )
}

export default AddList;