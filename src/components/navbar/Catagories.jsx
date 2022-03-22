import React from 'react'
import CatagoriesButton from './CatagoriesButton'

const Catagories = () => {
    return (
        <div className='flex sm:justify-center sm:flex-row md:flex-col gap-7 w-full text-white text-lg'>
            <CatagoriesButton><a href='#Home'>Home</a></CatagoriesButton>
            <CatagoriesButton><a href='#AboutMe'>About Me</a></CatagoriesButton>
            <CatagoriesButton><a href="#Mentors">Mentors</a></CatagoriesButton>
            <CatagoriesButton><a href='#Projects'>Projects</a></CatagoriesButton>
            <CatagoriesButton><a href="#CTA">Contact Me</a></CatagoriesButton>
        </div>
    )
}

export default Catagories