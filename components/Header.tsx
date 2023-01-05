import React from "react"; 
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row flex-center">
            {/* Social Icons */}
            <SocialIcon 
                url="https://github.com/Esca01" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://platzi.com/p/Esca_01/" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.instagram.com/estebanescor/" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.facebook.com/esteban.escalantecordoba" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/esteban-escalante-cordoba-9b6574217/" 
                fgColor="gray"
                bgColor="transparent"
            />

        </motion.div>
            <Link href="#contact">
        <motion.div 
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x:0,
            opacity: 1,
            scale: 1,
         }}
         transition={{ duration: 1.5 }}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer"> 
            <SocialIcon 
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contactame</p>
        </motion.div>
        </Link>
        
    </header>
  )
}