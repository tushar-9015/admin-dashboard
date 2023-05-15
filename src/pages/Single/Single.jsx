import React from 'react'
import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='single-container'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='edit-btn'>Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item-img"
              />
              <div className="details">details</div>
            </div>
          </div>
          <div className='right'></div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export default Single
