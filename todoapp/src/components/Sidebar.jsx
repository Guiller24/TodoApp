import React, { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { FaTasks, FaSignOutAlt, FaAngleDoubleRight, FaCalendarAlt, FaStickyNote, FaPlus } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md'
import AddList from './AddList';
import AddTag from './AddTag';

const Sidebar = ({ setSelectedComponent, selectedComponent, setShowSideBar, showSideBar }) => {
  
  const [showAddList, setShowAddList] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <nav>
      <button onClick={toggleSideBar} className='menu-btn'>
        <RxHamburgerMenu size={25} />
      </button>

      <div className={`menu ${showSideBar ? 'show' : ''}`}>
        <div className='top'>
          <h2>Menu</h2>
          <button onClick={toggleSideBar} className='menu-close'>
            <RxCross2 size={25} />
          </button>
        </div>
        <hr />
        <div className='task'>
          <h4>Tasks</h4>
          <button className={`task-btn ${selectedComponent === 'Upcoming' ? 'active' : ''}`}onClick={() => setSelectedComponent('Upcoming')} >
            <FaAngleDoubleRight />
             <span>Upcoming</span>
          </button>
          <button className={`task-btn ${selectedComponent === 'Today' ? 'active' : ''}`}onClick={() => setSelectedComponent('Today')} >
            <FaTasks />
            <span>Today</span>
          </button>
          <button className={`task-btn ${selectedComponent === 'Calendar' ? 'active' : ''}`} onClick={() => setSelectedComponent('Calendar')} >
            <FaCalendarAlt />
            <span>Calendar</span>
          </button>
          <button className={`task-btn ${selectedComponent === 'StickyWall' ? 'active' : ''}`} onClick={() => setSelectedComponent('StickyWall')} >
            <FaStickyNote/>
            <span>Sticky Wall</span>
          </button>
        </div>
        <hr />
        <div className='list'>
          <h4>List</h4>
          <button className='add-list-btn' onClick={() => setShowAddList(!showAddList)}>
            <FaPlus />
            Add New List
          </button>
          <AddList showAddList={showAddList}/>
          
        </div>
        <hr />
        <div className='tags'>
          <div className='tag-container'>
          <h4>Tags</h4>
          <button className='add-tag-btn' onClick={() => setShowAddTag(!showAddTag)}>
            <FaPlus />
            Add Tag
          </button>
          <AddTag showAddTag={showAddTag}/>
          </div>
        </div>
        <hr />
        
        <div className='footer'>
          <button className='footer-btn'>
            <MdSettings size={20} />
            Settings
          </button>
          <button className='footer-btn'>
            <FaSignOutAlt size={20}/>
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;