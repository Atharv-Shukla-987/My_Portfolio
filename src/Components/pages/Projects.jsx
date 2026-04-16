import React from 'react'
import ProjectCard from '../ProjectCard.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Projects = () => {
  const projects = [{
    image1: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80',
    image2: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80'
  }, {
    image1: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80',
    image2: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80'
  }, {
    image1: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw1fHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80',
    image2: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHx3ZWIlMjBkZXZ8ZW58MHx8fHwxNzc2MzYwMjE0fDA&ixlib=rb-4.1.0&fit=max&q=80'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <section className='max-container'>
      <h1 mx-6 className='mt-40 mx-6 sm:text-5xl text-3xl font-semibold sm:leading-snug '>
        My
        <span className='ml-4 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed mx-6'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      <div className='lg:p-4 p-2 '>
     
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
    </section>
  )
}

export default Projects
