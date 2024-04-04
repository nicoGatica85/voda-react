import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import ownStyles from '../app/styles.module.css';

const Logo = () => {
    return (
        <>
                <a href="#">
                    <Image 
                    width={140}
                    height={65}    
                    src='/img/voda-logo.png'
                    />
                </a>
                <a href="#" className={`${ownStyles.logoBar}`}>
                    <FaBars
                        style={{
                            color: '#83acd6',
                        }}
                    />
                </a>
                <a>
                    <i></i>
                </a>
        </>
        
        
    )
}

export default Logo;