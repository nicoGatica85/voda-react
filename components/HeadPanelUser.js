import React from "react";
import { Nav, NavLink, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import { FaHistory } from "react-icons/fa";
import '../app/styles.css';
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ownStyles from '../app/styles.module.css';

const HeadPanelUser = () => {
    return (
        <div className="pe-3">
            
                            
                    <Dropdown className="">
                        <DropdownToggle variant="" id="" className={`border-0 ${ownStyles.toggleDrop}`}>
                            <Link href={'#'} className={` ${ownStyles.iconUser}`}>
                                <FaUserCircle className={`fs-2  ${ownStyles.iconHead}`}  
                                />
                            </Link>
                        </DropdownToggle>
                        <DropdownMenu className={`position-absolute rounded-0 p-3  ${ownStyles.menuDrop}`}>
                            <div className={`mx-4`}>
                                <h6 className={`fs-7`}>User</h6>
                                <p className={`fs-7`}>mail User</p>
                            </div>
                            <hr></hr>
                            <DropdownItem href="#/action-1">Cerrar Sesión</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                
            
        </div>
        
        
    )
}

export default HeadPanelUser;