import logo from './logo.svg';
import './App.css';
import Activity from './Components/Activity/Activity';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState(0)


  const exerciseTime = (preTime) => {
    const newTime = time + preTime
    setTime(newTime);
  }


  return (
    <div className='container1'>
      <Activity exercise={exerciseTime}></Activity>
      <Sidebar time={time}></Sidebar>
    </div>
  );
}

export default App;
