import React from "react";
import { FaHistory } from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiCalendarCheckFill } from "react-icons/ri";
import { RiKey2Fill } from "react-icons/ri";
import '../app/styles.css';
import Link from "next/link";
import ownStyles from '../app/styles.module.css';

const HeadPanelMenu = () => {
    return (
        <div className="d-flex align-items-center">
                <Link href={'#'} style={{textDecoration: 'none'}} className={`d-flex ${ownStyles.linkHead}`}>
                    <div className={`d-grid ${ownStyles.innerLink}`}>
                        <FaHistory className={`d-flex text-center fs-3 ${ownStyles.iconHead}`}
                        />
                        <span className={`fw-light mt-1 ${ownStyles.textHead}`}>Historial</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`d-flex ${ownStyles.linkHead}`}>
                    <div className={`d-grid ${ownStyles.innerLink}`}>
                        <BsFileEarmarkText className={`d-flex text-center fs-3 ${ownStyles.iconHead}`}
                        />
                        <span className={`fw-light mt-1 ${ownStyles.textHead}`}>Reportes</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`d-flex ${ownStyles.linkHead}`}>
                    <div className={`d-grid ${ownStyles.innerLink}`}>
                        <MdOutlineAttachMoney className={`d-flex text-center fs-3 ${ownStyles.iconHead}`}
                        />
                        <span className={`fw-light mt-1 ${ownStyles.textHead}`}>Ventas</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`d-flex ${ownStyles.linkHead}`}>
                    <div className={`d-grid ${ownStyles.innerLink}`}>
                        <RiCalendarCheckFill className={`d-flex text-center fs-3 ${ownStyles.iconHead}`}
                        />
                        <span className={`fw-light mt-1 ${ownStyles.textHead}`}>Turnos</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`d-flex ${ownStyles.linkHead}`}>
                    <div className={`d-grid ${ownStyles.innerLink}`}>
                        <RiKey2Fill className={`d-flex text-center fs-3 ${ownStyles.iconHead}`}
                        />
                        <span className={`fw-light mt-1 ${ownStyles.textHead}`}>Permisos</span>
                    </div>
                </Link>
        </div>
        
        
    )
}

export default HeadPanelMenu;