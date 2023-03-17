import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src={require('../Image/logoimage.jpg')} />
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              > 
                <Dropdown title="Services">
                  <Dropdown.Menu title="Quality">
                    <Dropdown.Item as={Link} to='/quality' >ISO 9001</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu title="Environment">
                    <Dropdown.Item as={Link} to='/environment'>ISO 14001</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu title="Health & Safety">
                    <Dropdown.Item as={Link} to='/iso45001'>ISO 45001</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/hippa'>HIPAA</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu title="Food Safety">
                    <Dropdown.Item as={Link} to='/haccp'>HACCP</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/iso22000'>ISO 22000</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/halal'>HALAL</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu title="Cyber Security">
                    <Dropdown.Item as={Link} to='/iso27001'>ISO 27001</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/gdpr'>GDPR</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/pci'>PCI</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/soc'>SOC</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/vapt'>VAPT</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu title="Product Certification">
                    <Dropdown.Item as={Link} to='/cemarketing'>CE Marking </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to='/contact-us'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline1'>Contact Us</Button>}
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
