import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from "react-redux";
import {logout } from "./features/userSlice";
import { auth } from './firebase';

function Header() {
    
    const dispatch = useDispatch();
     
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
           
        <div className="header_left">
           <img src="./images/linkedln.png" alt=""/>
           <div className="header_search">
             <SearchIcon />

             <input type="text"  placeholder="Search"/>

            </div>
        </div>
        <div className="header_right">
            <HeaderOptions Icon={HomeIcon}  title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon}  title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notification" />
            <HeaderOptions  avatar={true}
                            title="me"
                            onClick={logoutOfApp}
                            />
        </div>
        </div>
    )
}

export default Header
