import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='py-20 align-elements' id='skills'>
        <SectionTitle text='Tech Stack'/>
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill)=>{
            return <SkillsCard {...skill} key={skill.id}/>
        })}
        </div>
    </section>
  )
}

export default Skills