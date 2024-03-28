import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import { FaHistory } from "react-icons/fa";
import '../app/styles.css';


const HeadPanelMenu = () => {
    return (
        <div className="navbar ">
            <Nav className="">
                <NavLink href="#" className="fs-sm NavEach align-items-center d-flex flex-column">
                    <FaHistory
                        style={{
                            color: '#83acd6',
                            fontSize: 28,
                            /*fontWeight: 80,*/
                            strokeWidth: 10,
                        }}
                    />
                    <span className="fs-sm">Historial</span>
                </NavLink>
            </Nav>
            <Nav className="">
                <NavLink href="#" className="">
                    <i></i>
                    <span>Reportes</span>
                </NavLink>
            </Nav>
            <Nav className="">
                <NavLink href="#" className="">
                <i></i>
                    <span>Ventas</span>
                </NavLink>
            </Nav>
            <Nav className="">
                <NavLink href="#" className="">
                    <i></i>
                    <span>Turnos</span>
                </NavLink>
            </Nav>
            <Nav className="">
                <NavLink href="#" className="">
                    <i></i>
                    <span>Permisos</span>
                </NavLink>
            </Nav>
            
        </div>
        
        
    )
}

export default HeadPanelMenu;