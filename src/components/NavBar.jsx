import React from 'react'
import {links} from '../data'
const NavBar = () => {
    console.log(links)
  return (
    <nav className='bg-emerald-100'>
        <div className='align-elements py-4 flex
        flex-col sm:flex-row sm:gap-x-16 sm-item-center sm:py-8'>
        <h2 className='text-3xl font-bold'>theconfused<span className='text-emerald-600'>head</span></h2>
        <div className='flex gap-x-3'>
            {links.map(({id,href,text})=>{
                return <a key={id}href={href} className='capitalize text-lg
                tracking-wide hover:text-emerald-600 duration-300'>
                {text}
                </a>
            })}
        </div>
        </div>
    </nav>
  )
}

export default NavBar