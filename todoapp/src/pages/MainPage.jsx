import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import Sidebar from '../components/Sidebar';
import StickyWall from '../components/StickyWall';
import Today from '../components/Today';
import Upcoming from '../components/Upcoming';
import { useNav } from '../utils/Navigate';

const MainPage = ({ isAuth }) => {
  const [selectedComponent, setSelectedComponent] = useState('Today');
  const [showSideBar, setShowSideBar] = useState(true);
  const { SignIn } = useNav();

  useEffect(() => {
    document.title = 'Task Master';
    if(!isAuth){
      SignIn();
    }
  });

  const renderSelectedComponent = () =>{
    switch (selectedComponent){
      case 'Upcoming':
        return <Upcoming />;
      case 'Today':
        return <Today />;
      case 'Calendar':
        return <Calendar />;
      case 'StickyWall':
        return <StickyWall />;
      default:
        return null;
    }
  }

  return (
    <div className='main'>
      <Sidebar setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
      <div className={`main-section ${showSideBar ? 'adjust' : ''}`}>
        {renderSelectedComponent()}
      </div>
    </div>
  )
}

export default MainPage;