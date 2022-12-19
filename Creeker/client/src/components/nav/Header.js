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
  DropdownItem,
  Offcanvas,
  OffcanvasHeader,
  Button,
  OffcanvasBody
} from 'reactstrap';
import { FaBars, FaFeather } from 'react-icons/fa';

export default function Header({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }, args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState();
  const canvasToggle = () => setOpen(!open);
  const menuItem = [
    {
      path: '/categories/create',
      name: 'New Category',
      icon: <FaFeather />,
    },
    {
      path: '/posts/create',
      name: 'New Post',
      icon: <FaFeather />,
    },
    {
      path: '/tags/create',
      name: 'New Tag',
      icon: <FaFeather />,
    },
  
  ]

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
                    <UncontrolledDropdown nav inNavbar style={{ }}>
                    <DropdownToggle style={{color: '#EEFBF5', border: "transparent" }}nav caret>
                      Admin
                    </DropdownToggle>
                    <DropdownMenu end style={{ backgroundColor: 'transparent', width: "2px"}}>
                     <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/tags">Tags</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/users">Profiles</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/categories">Categories</NavLink></DropdownItem>
                      <DropdownItem> <NavLink style={{color: '#EEFBF5'}} tag={RRNavLink} to="/quarantine">Quarantine</NavLink></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
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
            <Button style={{backgroundColor: "transparent", border: "none"}}
          onClick={() => {
            setOpen(true);
          }}
          >
          <FaBars/>
        </Button>
            {!isLoggedIn &&
              <>
               
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>

      
      {/* Canvas start */}
      <div  >
        <Offcanvas style={{width: "200px", backgroundColor: '#EEFBF5', }} {...args} isOpen={open} toggle={canvasToggle}>
          <OffcanvasHeader style={{color: "black"}} toggle={canvasToggle}>Options</OffcanvasHeader>
          <OffcanvasBody style={{width: "88px"}}>
            {menuItem.map((item, index) => (
              <NavLink
                style={{textDecoration: "none"}}
                to={item.path}
                key={index}
                className="link"
              >
                <div className="link_icon" style={{color: "black"}}>{item.icon}</div>
                <div className="link_text" style={{color: "black"}}>{item.name}</div>
              </NavLink>
                  ))}
          </OffcanvasBody>
        </Offcanvas>
      </div>
      {/* Canvas end */}

    </div>
    
  );
}

Header.args = {
  backdrop: true,
  fade: true,
  scrollable: false,
};


Header.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['bottom'],
  },
};
