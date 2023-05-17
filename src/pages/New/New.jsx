import React from 'react'
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' alt='' />
          </div>
          <div className="right">
            <form>
            <div className='form-input'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input id='file' type='file' style={{display:"none"}} />
              </div>
              <div className='form-input'>
                <label>Username</label>
                <input type='text' placeholder='john_doe' />
              </div>
              <div className='form-input'>
                <label>Name and Surname</label>
                <input type='text' placeholder='John Doe' />
              </div>
              <div className='form-input'>
                <label>Email</label>
                <input type='email' placeholder='john@gmail.com'/>
              </div>
              <div className='form-input'>
                <label>Phone</label>
                <input type='text' placeholder='123 4567 890'/>
              </div>
              <div className='form-input'>
                <label>Password</label>
                <input type='password'/>
              </div>
              <div className='form-input'>
                <label>Address</label>
                <input type='text' placeholder='b-17 saket, New Delhi'/>
              </div>
              <div className='form-input'>
                <label>Country</label>
                <input type='text' placeholder='India'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
