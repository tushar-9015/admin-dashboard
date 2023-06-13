import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext/darkModeContext';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    const {authDispatch} = useContext(AuthContext)
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className='logo'>iamadmin</span>
            </Link>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
            <Link to='/' style={{ textDecoration: "none" }}>
            <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
            </li>
            </Link>
            <p className='title'>LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon className="icon" />  
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
            <StoreIcon className="icon" />
                <span>Products</span>
            </li>
            </Link>
            <li>
            <ExitToAppIcon className="icon" />
                <span onClick={() => authDispatch({type: 'LOGOUT'})} >Log Out</span>
            </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='color-options' onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className='color-options' onClick={() => dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar
