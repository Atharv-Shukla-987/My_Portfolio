import React from 'react'
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
    return (
        <>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <Link to='https://github.com/' className='uppercase text-6xl  border-4 pt-4 px-8 text-white border-white rounded-full '>See the project</Link>
                </div>
            </div>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <Link to='https://github.com/' className='uppercase text-6xl  border-4 pt-4 px-8 text-white border-white rounded-full '>See the project</Link>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
