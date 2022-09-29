import logo from './logo.svg';
import './App.css';
import Activity from './Components/Activity/Activity';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [time, setTime] = useState(0)


  const exerciseTime = (preTime) => {
    const newTime = time + preTime
    setTime(newTime);
  }


  return (
    <div className='container1'>
      <Row>
        <Col sm={12} md={9}><Activity exercise={exerciseTime}></Activity></Col>
        <Col sm={{ order: 1 }} md={3}><Sidebar time={time}></Sidebar></Col>
      </Row>
    </div>
  );
}

export default App;
