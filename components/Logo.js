import React from "react";
import Image from "next/image";
import '../app/styles.css';
import { FaBars } from "react-icons/fa";

const Logo = () => {
    return (
        <>
            <div className="logo d-flex justify-content-between align-items-center pe-3 ps-3">
                <a href="#">
                    <Image 
                    width={140}
                    height={65}    
                    src='/img/voda-logo.png'
                    />
                </a>
                <a href="#" className="logoBar">
                    <FaBars
                        style={{
                            color: 'white',
                        }}
                    />
                </a>
                <a>
                    <i></i>
                </a>
            </div>
        </>
        
        
    )
}

export default Logo;