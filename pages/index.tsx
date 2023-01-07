import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import Image from 'next/image';
import { GetStaticProps } from 'next'
import { PageInfo, Project, Skill, Social, Experience } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocial'



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo,experiences,skills,socials,projects}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#61ff45]/80'>
      <Head>
        <title>Portafolio de Esteban</title>
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo = {pageInfo}/>
      </section>
      
      <section id='about' className='snap-center'>
        <About pageInfo = {pageInfo}/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences = {experiences}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills = {skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects = {projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <Image className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' src='/img/HomeButton.png' alt='' width='50' height='50'/>
          </div>
        </footer>
      </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences() || null;
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props:{
      pageInfo,
      experiences ,
      skills,
      projects,
      socials,
    },
  };
};