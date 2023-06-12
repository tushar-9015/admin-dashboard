import React, { useContext } from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from '../../context/darkModeContext/darkModeContext';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className='item'>
            <img src='https://images.pexels.com/photos/16773707/pexels-photo-16773707.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
