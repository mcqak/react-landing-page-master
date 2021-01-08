import React from "react";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import "./Navigation.css"
import logo from "../../assets/images/pyxis social-04.svg";

export default function Navigation() {
    return <div className={"navContainer"}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home"><img src={logo} alt={"logo"}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Resources" id="collasible-nav-dropdown2">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">About us</Nav.Link>
                    <Button className={"navButton"}>Book A Demo</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

}
