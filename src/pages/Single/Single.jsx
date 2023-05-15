import React from 'react'
import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

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
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className='detail-item'>
                  <span className='item-key'>Email:</span>
                  <span className='item-value'>janedoe@gmail.com</span>
                </div>
                <div className='detail-item'>
                  <span className='item-key'>Address:</span>
                  <span className='item-value'>17A Saket, New Delhi</span>
                </div>
                <div className='detail-item'>
                  <span className='item-key'>Phone:</span>
                  <span className='item-value'>123 3434 232</span>
                </div>
                <div className='detail-item'>
                  <span className='item-key'>Country:</span>
                  <span className='item-value'>India</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className='right'>
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className='bottom'>
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
