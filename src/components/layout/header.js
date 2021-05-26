import React from "react";
import { Nav,Navbar,NavDropdown } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import "../../assets/css/stylesheet.css"
const Header = () => {
  return (
    <div className="h-80px  bg-transparent absolute w-full top-0">
    <Navbar  className="flex max-w-1366px m-auto h-full justify-between items-center pl-80px pr-40px" expand="lg">
      <Navbar.Brand href="#home"><img src={logo} className="w-153px" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-end w-full navbarlinks">
          <Nav.Link className="text-black text-16px " href="#home">Products</Nav.Link>
          <Nav.Link className="text-black text-16px ml-38px" href="#link">Use Cases</Nav.Link>
          <Nav.Link className="text-black text-16px ml-38px" href="#home">Pricing</Nav.Link>
          <Nav.Link className="text-black text-16px ml-38px" href="#link">Company</Nav.Link>
          <Nav.Link className="text-black text-16px ml-38px" href="#home">Resources</Nav.Link>
          <Nav.Link className="text-white w-153px text-14px border-transparent border border-solid rounded-31px ml-38px login h-31 flex justify-center items-center uppercase leading-none " href="#link">Start Free Trial</Nav.Link>
          <Nav.Link className="text-black text-14px ml-38px uppercase w-84px  bg-transparent rounded-31px border border-solid flex h-81px justify-center items-center leading-none" href="#link">Log in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
