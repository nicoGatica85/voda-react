import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import ownStyles from '../app/styles.module.css';
import Link from "next/link";

const Logo = () => {
    return (
        <>
                <Link href="/">
                    <Image 
                    width={140}
                    height={65}    
                    src='/img/voda-logo.png'
                    alt="Logo Voda"
                    />
                </Link>
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