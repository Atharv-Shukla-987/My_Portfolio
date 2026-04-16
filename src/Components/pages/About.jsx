import React from 'react'
import { skills , experiences} from '../../constants'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../CTA'

const About = () => {
  return (
    <section className='max-container'>
     <div className='mt-40 mx-6 flex flex-col gap-3 text-slate-500'>
      <h1 className='sm:text-5xl text-3xl  font-semibold sm:leading-snug text-black'>
      Hello, I am 
      <span className='ml-4 font-semibold drop-shadow bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent'>
        Atharv Shukla
      </span>
     </h1>
      <p >
        Web Developer based in India, specializing in technical education 
        through hands-on learning and building applications.
      </p>
     </div>

    <div className='mt-16 flex flex-wrap gap-12'>
  {skills.map((skill) => (
    <div className='block-container w-20 h-20' key={skill.name}>
      <div className='btn-back rounded-xl' />
      <div className='btn-front rounded-xl flex justify-center items-center'>
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
  ))}
</div>
     <div>
      <h1 className='font-semibold mx-6 sm:text-3xl text-xl relative'>Work Experience</h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='mx-6'>
          I have worked on different sorts of projects, leveling up my skills and teaming up with snart people. Here's the rundown:
        </p>
      </div>
      <div className='mt-12 flex'>
        <VerticalTimeline>
  {experiences.map((experience, index) => (
    <VerticalTimelineElement
      key={`${experience.company_name}-${index}`}
      date={experience.date}
     
      iconStyle={{ background: experience.iconBg }}
      contentStyle={{
        borderBottom: `8px solid ${experience.iconBg}`,
        boxShadow: "none",
      }}
    
      className="vertical-timeline-element--work"
    >
      <div>
        <h3 className='text-black text-xl font-poppins font-semibold'>
          {experience.title}
        </h3>
        <p className='text-black/80 font-medium text-base font-work-sans !m-0'>
          {experience.company_name}
        </p>
      </div>

      <ul className='my-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black/50 font-normal pl-1 text-sm font-work-sans'
          >
            {point}
          </li>
        ))}
      </ul>

      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-3/5 h-3/5 object-contain'
        />
      </div>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
      </div>
     </div>
     <hr className='border-slate-500 '/>
     <CTA/>
    </section>    
  )
}

export default About
