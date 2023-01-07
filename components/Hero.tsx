/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    const  [text, count] = useTypewriter({
        words: [
            `Hola, Soy ${pageInfo?.name}`,
            "Me gusta una buena taza de cafe",
            "<PeroMeGustaMasProgramar/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
         <BackgroundCircles />
         <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='' width='600' height='600'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#61ff45' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>Acerca de Mi</button>
                </Link>
                
                <Link href="#experience">
                    <button className='heroButton'>Experiencia</button>
                </Link>

                <Link href="#skills">
                    <button className='heroButton'>Habilidades</button>
                </Link>

                <Link href="#projects">
                    <button className='heroButton'>Proyectos</button>
                </Link>
            </div>
        </div>
    </div>
  )
}