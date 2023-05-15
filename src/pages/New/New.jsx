import React from 'react'
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        test
      </div>
    </div>
  )
}

export default New
