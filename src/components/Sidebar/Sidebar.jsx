import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
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
            <p className='title'>USEFUL</p>
            <li>
            <InsertChartIcon className="icon" />
                <span>Stats</span>
            </li>
            <li>
            <ExitToAppIcon className="icon" />
                <span >Log Out</span>
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
