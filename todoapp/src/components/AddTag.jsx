import React from 'react';

const AddTag = ({ showAddTag }) => {
  
  return (
    <div className='add-tag'>
        <div className={`add-tag-container ${showAddTag ? 'show' : ''}`}>
            <h3>Add Tag</h3>
            <div className='tag-input-container'>
              <input type='text' placeholder='Add Tag...' className='tag-input' />
              <button className='tag-btn'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddTag;