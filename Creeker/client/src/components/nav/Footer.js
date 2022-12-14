import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../../modules/UserManager';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function Footer({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
//     <footer style={{width: "100%", bottom: "0", position: "absolute", height:"2.5rem",  overflow: "hidden", backgroundColor: "#587D71"}}>
//     <div className='container'>
// <span style={{color: "#EEFBF5"}}>Campbells Creek Cares</span>
//     </div>
//     </footer>
 
  return (
    <>
 {/* <Navbar style={{width: "100%", bottom: "0", position: "absolute",  overflow: "hidden", backgroundColor: "#587D71"}} light expand="md">
  <NavbarBrand style={{color: "#EEFBF5"}}>Campbells Creek Cares</NavbarBrand>
  <NavbarToggler onClick={toggle} />
  <Collapse isOpen={isOpen} navbar>
    <Nav className="mr-auto" navbar>
    </Nav>
  </Collapse>
</Navbar> */}
</> );
}
