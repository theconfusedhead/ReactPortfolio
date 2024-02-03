import React from 'react'
import AboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
    <div className='align-elements grid md:grid-cols-2 items-center gap-16'>
    <img src={AboutSvg} className='w-full h-64'/>
    <article>
    <SectionTitle text='code and coffee'/>
    <p className='text-slate-600 mt-8 leading-loose'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium excepturi temporibus maxime eos dolores aspernatur quod ut natus deserunt aliquam perferendis ad commodi expedita dolore harum, animi dolorum. Corrupti.
    </p>
    </article>
    </div>
    </section>
  )
}

export default About