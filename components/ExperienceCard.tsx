import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
        <motion.img 
            initial={{ 
                y: -100,
                opacity: 0, 
            }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{ duration: 1.2 }}
            className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center'
            src="./img/Experiencia.png" 
            alt="" 
    />

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Sin Experiencia</h4>
        <p className='font-bold text-2xl mt-1'></p>
        <div className='flex space-x-2 my-2'>
            {/* Tecnologias usadas */}
            {/* Tecnologias usadas */}
            {/* Tecnologias usadas */}
        </div>
        <p className='uppercase py-5 text-gray-300'></p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </article>
  )
}