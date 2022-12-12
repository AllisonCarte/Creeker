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

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: "#587D71"}} light expand="md">
        <NavbarBrand style={{color: "#EEFBF5"}} tag={RRNavLink} to="/">Creeker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavItem>
                <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>
              
            }
             { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavItem>
                 <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/about">About</NavLink>
              </NavItem>
              
            }
             {isLoggedIn && 
              <NavItem>
                 <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/contact">Contact</NavLink>
              </NavItem>
            }
             {isLoggedIn &&
              <NavItem>
                 <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/posts">Posts</NavLink>
              </NavItem>
            }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
               <UncontrolledDropdown nav inNavbar>
               <DropdownToggle style={{color: "#EEFBF5"}} nav caret>
                 Admin
               </DropdownToggle>
               <DropdownMenu end style={{backgroundColor: "#587D71"}}>
                 <DropdownItem> <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/users">Profiles</NavLink></DropdownItem>
                 <DropdownItem> <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/categories">Categories</NavLink></DropdownItem>
                 <DropdownItem> <NavLink style={{color: "#EEFBF5"}} tag={RRNavLink} to="/quarantine">Quarantine</NavLink></DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
            }
            {isLoggedIn &&
              <>
                <NavItem>
                  <a aria-current="page" className="nav-link"
                    style={{ color: "#EEFBF5", cursor: "pointer" }} onClick={() => {
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