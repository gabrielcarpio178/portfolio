import React, {useState} from 'react';
import {motion} from 'framer-motion'

import UserLogo from './../icons/uis--user-md.svg';
import close from './../icons/close-x-svgrepo-com.svg'
import BurgerButton from '../icons/burger-menu-svgrepo-com.svg'

function Header(){
    const [navBtn, showNoti] = useState(true)
    const handleShowNoti = ()=>{
        showNoti(!navBtn)
    }
    return (
        <header className="shadow-lg flex flex-wrap justify-between items-center fixed w-full bg-gray-200 py-[1%] md:px-[10%] px-[5%] mx-auto max-w-screen gap-y-3 z-20">
            <div className="flex flex-row items-center md:gap-x-[10%] md:w-auto w-1/2 gap-x-[5%]">
                <img src={UserLogo} alt="icons" className="w-[50px] max-w-[100%] border border-black rounded-full p-[5%]"/>
            </div>
            
            <motion.div layout className={`${!navBtn?"h-auto":"h-0"} md:h-full md:overflow-show overflow-hidden md:w-1/2 w-full md:order-1 order-2 md:p-2`}>
                <ul className="flex md:flex-row flex-col items-center md:justify-between w-full md:gap-0 gap-3 p-2">
                    <motion.li initial={{backgroundColor: "transparent", color: "black", scale: "1"}} whileHover={{backgroundColor: "#475569", color: "white", scale: "1.1"}} className="transition-all px-3 py-1 rounded-md md:w-auto text-center"><a className="font-bold text-xl" href="#home">Home</a></motion.li>
                    <motion.li initial={{backgroundColor: "transparent", color: "black", scale: "1"}} whileHover={{backgroundColor: "#475569", color: "white", scale: "1.1"}} className="transition-all px-3 py-1 rounded-md md:w-auto text-center"><a className="font-bold text-xl" href="#about">About</a></motion.li>
                    <motion.li initial={{backgroundColor: "transparent", color: "black", scale: "1"}} whileHover={{backgroundColor: "#475569", color: "white", scale: "1.1"}} className="transition-all px-3 py-1 rounded-md md:w-auto text-center"><a className="font-bold text-xl" href="#project">Projects</a></motion.li>
                    <motion.li initial={{backgroundColor: "transparent", color: "black", scale: "1"}} whileHover={{backgroundColor: "#475569", color: "white", scale: "1.1"}} className="transition-all px-3 py-1 rounded-md md:w-auto text-center"><a className="font-bold text-xl" href="#contact">Contact</a></motion.li>
                </ul>
            </motion.div>
            
            <div className="md:hidden block" onClick={handleShowNoti}>
                <img src={navBtn ? BurgerButton:close} alt="burger button" className='md:hidden w-[40px] cursor-pointer border-2 border-black p-1 rounded' />
            </div>
        </header>
    )
}

export default Header;