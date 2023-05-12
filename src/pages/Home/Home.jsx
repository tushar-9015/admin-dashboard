import React from 'react'
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />
        <div className='widget-container'>
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Home
