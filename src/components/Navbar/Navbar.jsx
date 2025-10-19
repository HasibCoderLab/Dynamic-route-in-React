import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-sky-400 p-4 flex justify-around text-2xl m-5'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            {/* Contact link hidden on mobile, visible on medium+ screens */}
            <Link className='hidden md:block' to='/blogs'>Blogs</Link>
            {/* Contact link hidden on mobile, visible on medium+ screens */}
            <Link className='hidden md:block' to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
