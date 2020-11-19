import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {  FaBatteryFull, FaBuilding, FaChargingStation, FaChartBar, FaCity, FaClock, FaHistory} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sidebarimg from '../images/bg1.jpg';
import avatar from '../images/default-avatar.png';
import Logo from '../images/logo.jpg';



export default class SideBar extends Component {
    render() {
        return (
            
              <ProSidebar  image={sidebarimg}>
                  
              <SidebarHeader>
            
                  <div className="pro-sidebar-header">
                  <h1><img className="logo" src={Logo}/></h1>

                  </div>
                  <div className="user">
                  <Menu>
    
    <SubMenu title="Demo" icon={<img src={avatar}/>}>
      <MenuItem>Demo 1</MenuItem>
      <MenuItem>Demo 2</MenuItem>
    </SubMenu>
  </Menu>
                 

                 
                  
                 
                  


                  </div>
                  
  <Menu iconShape="square">
    <MenuItem icon={<FaChargingStation />}><Link to="/">Charging Stations</Link></MenuItem>
    {/* <MenuItem icon={<FaHistory />}><Link to="/Sesssions">Sesssions</Link></MenuItem>
    <MenuItem icon={<FaChartBar />}><Link to="/Statistics">Statistics</Link></MenuItem>
    <MenuItem icon={<FaCity />}><Link to="/Organization">Organization</Link></MenuItem> */}
    {/* <SubMenu title="Components" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu> */}
  </Menu>
  </SidebarHeader>
 

</ProSidebar>


           
        )
    }
}
