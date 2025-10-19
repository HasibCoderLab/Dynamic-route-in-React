import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' bg-sky-400 p-4 flex justify-around text-2xl m-5'>
        
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/contact'}>Contact</Link>
               
        
                
        </div>
    )
}

export default Navbar