import React, {Component} from 'react';
import { Navbar, NavLink, NavbarBrand, NavDropdown, Nav } from 'react-bootstrap';
import { render } from 'react-dom';
// import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    
    render() {
        var home = "/";
        var addUser = "add";
        var active = { color: '#F0F',
        fontWeight: 'bold'};
        return(
            <Navbar sticky="top" bg="light" variant = "light">
               <NavbarBrand href="/">Smoelenboek</NavbarBrand>
               <Nav className="ml-auto">
                <NavDropdown title="Smoelenboek" id="basic-nav-dropdown" >
                        <NavDropdown.Item onClick= {this.props.setCard}>Toon Karten</NavDropdown.Item>
                        <NavDropdown.Item onClick= {this.props.setRow}>Toon Rows</NavDropdown.Item> 
                    </NavDropdown>
                <NavLink href="/add">Toevoegen</NavLink>
               </Nav>
               
            </Navbar>
        );
        }
}