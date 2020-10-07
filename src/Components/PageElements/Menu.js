import React, {Component} from 'react';
import { Navbar, NavLink, NavbarBrand } from 'react-bootstrap';
import { render } from 'react-dom';
// import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        var home = "/";
        var addUser = "add";
        var active = { color: '#F0F',
        fontWeight: 'bold'}
        return(
            <Navbar sticky="top" bg="dark" variant = "dark">
               <NavbarBrand href="/">Smoelenboek</NavbarBrand>
               <NavLink href="/add">Toevoegen</NavLink>
            </Navbar>
        );
        }
}