import React from "react";
import '../app/styles.css';
import { Nav, NavLink } from "react-bootstrap";



const Sidebar = () => {
    return (
        <div className="sidebar position-fixed vh-100">
            <Nav className="nav-item">
                <NavLink href="#" className="nav-link flex align-items-center">
                    <i></i>
                    <span>Inicio</span>
                </NavLink>
            </Nav>
            <Nav className="nav-item">
                <NavLink href="#" className="nav-link">
                    <i></i>
                    <span>Proveedores</span>
                </NavLink>
            </Nav>
            <Nav className="nav-item">
                <NavLink href="#" className="nav-link">
                    <i></i>
                    <span>Artículos</span>
                </NavLink>
            </Nav>
        </div>
        
    )
}

export default Sidebar;