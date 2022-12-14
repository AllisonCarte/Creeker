import { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { FaFeather, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Canvas = (args) => {
  const [open, setOpen] = useState()
  const toggle = () => setOpen(!open)
  const menuItem = [
    {
      path: '/posts/create',
      name: 'New Post',
      icon: <FaFeather />,
    },
  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'end' }}>
      <Button
        style={{
          marginRight: '10px',
          marginTop: '10px',
          backgroundColor: '#587D71',
        }}
        onClick={() => {
          setOpen(true)
        }}
      >
        <FaBars />
      </Button>
      <Offcanvas
        style={{ width: '200px', backgroundColor: '#587D71' }}
        {...args}
        isOpen={open}
        toggle={toggle}
      >
        <OffcanvasHeader style={{ color: '#EEFBF5' }} toggle={toggle}>
          Post Options
        </OffcanvasHeader>
        <OffcanvasBody style={{ width: '88px' }}>
          {menuItem.map((item, index) => (
            <NavLink
              style={{ textDecoration: 'none' }}
              to={item.path}
              key={index}
              className="link"
            >
              <div className="link_icon" style={{ color: '#EEFBF5' }}>
                {item.icon}
              </div>
              <div className="link_text" style={{ color: '#EEFBF5' }}>
                {item.name}
              </div>
            </NavLink>
          ))}
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

Canvas.args = {
  backdrop: true,
  fade: true,
  scrollable: false,
}

Canvas.argTypes = {
  direction: {
    control: { type: 'select' },
    options: ['top', 'start', 'end', 'bottom'],
  },
}

export default Canvas
