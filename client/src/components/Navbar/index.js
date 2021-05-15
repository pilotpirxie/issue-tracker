import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Issue Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
