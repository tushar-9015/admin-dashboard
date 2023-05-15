import React from 'react'
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import FeaturedCharts from '../../components/FeaturedCharts/FeaturedCharts';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />
        <div className='widget-container'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className='charts'>
          <FeaturedCharts />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="list">
          <div className="list-title">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
