import React from 'react'

const AddList = ({ showAddList }) => {

  return (
    <div className='add-list'>
        <div className={`add-list-container ${showAddList ? 'show' : ''}`}>
            <h3>Add List</h3>
            <div className='list-input-container'>  
              <input type='text' placeholder='Add List...' className='list-input'/>
              <button className='list-btn'>Add</button>
            </div>  
        </div>
    </div>
  )
}

export default AddList;