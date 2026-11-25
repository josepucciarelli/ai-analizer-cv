import React from 'react'
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' >
                <p className="text-2xl max-sm:text-xl font-bold text-gradient">RESUMIT</p>
            </Link>
            <Link to='/upload' className="primary-button w-fit max-sm:text-sm max-sm:py-2">
                Upload <span className="max-sm:hidden">Resume</span>
            </Link>
        </nav>
    )
}
export default Navbar
