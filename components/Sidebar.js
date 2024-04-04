import React from "react";
import ownStyles from '../app/styles.module.css';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BiSolidTruck } from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className={``}> {/* seria el ul */}
            <div> {/* seria el li */}
                <Link href={'#'} className={` nav-link active d-flex align-items-center w-100 position-relative py-0 px-3 ${ownStyles.itemSidebar}`}>
                    <FaHome className={` me-2 fs-3 text-center`} />
                    <span className={`${ownStyles.textSidebar}`}>Inicio</span>
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'#'} className={`nav-link d-flex align-items-center w-100 position-relative py-0 px-3 ${ownStyles.itemSidebar}`}>
                    <BiSolidTruck className={` me-2 fs-3 text-center`} />
                    <span className={`${ownStyles.textSidebar}`}>Proveedores</span>
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'#'} className={`nav-link d-flex align-items-center w-100 position-relative py-0 px-3 ${ownStyles.itemSidebar}`}>
                    <BiSolidTruck className={` me-2 fs-3 text-center`} />
                    <span className={`${ownStyles.textSidebar}`}>Artículos</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;