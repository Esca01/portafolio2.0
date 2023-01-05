import React from 'react'
import { motion } from "framer-motion";


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Quien soy
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x:0 }}
          viewport={{ once:true }}        
        src="./img/About2.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
        />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Un <span className='underline dcoration-[#F7AB0A]/50'>poco</span> acerca de mi
          </h4>
          <p className='text-base'>
          Soy un estudiante el cual esta dispuesto a crear su propia experiencia laboral para así poder salir adelante en este mundo que actualmente se encuentra en una etapa difícil. siendo comprometido, honesto y colaborador espero poder cumplir y satisfacer cualquier demanda y/o problema que se me presente en mi campo laboral.
          </p>

        </div>
    </motion.div>
  )
}