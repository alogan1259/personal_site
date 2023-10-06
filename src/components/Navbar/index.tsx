import './index.css';
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo_blue.png';
import top from '../../assets/backtotop.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav_links">
                <li className="nav_link">
                    <div className="nav_logo">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <img src={logo} alt="logo" className='logo' />
                        </Link>
                    </div>
                </li>
                <li className="nav_link">
                    <Link
                        activeClass="active"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        <button className="button">Home</button>
                    </Link>
                </li>
                <li className="nav_link">
                    <Link
                        activeClass="active"
                        to="experience"
                        smooth={true}
                        duration={500}
                    >
                        <button className="button">Experience</button>
                    </Link>
                </li>
                <li className="nav_link">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <button className="button">Projects</button>
                    </Link>
                </li>
            </ul>
            <div className="back-to-top">
                <Link
                    to="navbar"  
                    smooth={true}
                    duration={500}
                >
                    <img src={top} alt="top" className='top'></img>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
