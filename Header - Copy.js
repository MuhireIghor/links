
import React from 'react'
import './Header.css';
import linkedin from './linkedin.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  return (
    <div className='header'>
  
      <div className="header__left">

 <img src={linkedin} />

<div className="header__search">
<SearchIcon/>
    <input type="text" />
</div>
      </div>
      <div className="header__right">
<HeaderOptions Icon={HomeIcon} title="Home"/>
<HeaderOptions Icon={SupervisorAccountIcon} title= "My Network "/>
<HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
<HeaderOptions Icon={ChatIcon} title="Messaging" />
<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
<HeaderOptions Icon={AccountCircleIcon} title="Me" />   

      </div>
    </div>
  )
}
 
export default Header;
 