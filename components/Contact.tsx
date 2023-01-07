import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {};

export default function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:esteban.esalante@utp.edu.co?subject={formData.subject}&body=Hola, mi nombre es ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contacto
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                ¿Soy lo que estabas buscando?.{" "} 
                <span className='decoration-[#61ff45]/50 underline'>Contactame</span>
            </h4>
        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#61ff45] h-7 w-7 animate-pulse'/>
                <div className='text-2xl'>+57 316-825-5901</div>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#61ff45] h-7 w-7 animate-pulse'/>
                <div className='text-2xl'>esteban.escalante@utp.edu.co</div>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#61ff45] h-7 w-7 animate-pulse'/>
                <div className='text-2xl'>Pereira, Risaralda, Co</div>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input
                  {...register("name")} 
                  placeholder='Nombre'
                  className='contactInput' type="text" />
                <input 
                  {...register("email")}
                  placeholder='Email'
                  className='contactInput' type="email" />
            </div>

            <input 
              {...register("subject")}
              placeholder='Asunto'
              className='contactInput' type="text" />

            <textarea 
              {...register("message")}
              placeholder='Mensaje'
              className='contactInput'/>
            <button 
              type='submit'
              className='bg-[#61ff45] py-5 px-10 rounded-md text-black font-bold text-lg'>Enviar</button>
        </form>
        </div>
    </div>
  )
}