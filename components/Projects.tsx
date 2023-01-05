import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ({}: Props) {
    const projects = [1,2];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Proyectos
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61ff45]/80'>
            {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                      }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    src="./img/PHP.png" 
                    alt="" 
                />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#61ff45]/50'> Caso de estudio {i + 1} de {projects.length}:</span>  Mini Php Lexer
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        Este es un analizador lexico el cual tiene como proposito procesar y evaluar un codigo en PHP y decir si este se puede ejecutar sin ningun problema, mostrando en pantalla el codigo completo y parte por parte lo que es cada cosa del codigo
                    </p>
                </div>
            </div>
            ))}
            </div>

        <div className='w-full absolute top-[30%] bg-[#61ff45]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}