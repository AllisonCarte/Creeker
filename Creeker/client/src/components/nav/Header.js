import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../../modules/UserManager';
import "./nav.css"
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

export default function Header({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbarStyling' light expand="md">
        <NavbarBrand style={{color: '#EEFBF5'}}  tag={RRNavLink} to="/">Creeker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="ms-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavItem>
                <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>
              
            }
            
             { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavItem>
                 <NavLink style={{color: '#EEFBF5'}}tag={RRNavLink} to="/about">About</NavLink>
              </NavItem>
              
            }
             {isLoggedIn && 
              <NavItem>
                 <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/contact">Contact</NavLink>
              </NavItem>
            }
             {isLoggedIn &&
              <NavItem>
                 <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/posts">Posts</NavLink>
              </NavItem>
            }
                 {isLoggedIn && isAdmin &&
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={{color: '#EEFBF5'}}nav caret>
                      Admin
                    </DropdownToggle>
                    <DropdownMenu end id='test' style={{ backgroundColor: '#587D71', width: "2vw"}}>
                     <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/tags">Tags</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/users">Profiles</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/categories">Categories</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/quarantine">Quarantine</NavLink></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                 }
            {isLoggedIn &&
              <NavItem>
                 <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/user/me">Me</NavLink>
              </NavItem>
            }
            
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem>
                  <a aria-current="page" className="nav-link" id='logoutStyles'
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}