import React from 'react'
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />
        home container
      </div>
    </div>
  )
}

export default Home
