import React from 'react'
import './list.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import UserDatatable from '../../components/DataTable/UserDataTable';


const UserList = () => {
  return (
    
      <div className="list">
        <Sidebar />
        <div className="list-container">
          <Navbar />
          <UserDatatable />
        </div>
      </div>
  )
}

export default UserList
