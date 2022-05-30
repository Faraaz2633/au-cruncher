import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prevState => !prevState);
        console.log('toggle')
    }

    return (
        <header>
            <nav>
                <Link to="/" className="nav_brand">
                    <h4>AU<span>Cruncher</span></h4>
                </Link>

                <div onClick={toggleOpen} className={isOpen ? "menu_icon menu_candy menu_active" : 'menu_icon menu_candy'}>
                    <span className="menu_open box_1"></span>
                    <span className="menu_open box_2"></span>
                    <span className="menu_open box_3"></span>
                    <span className="menu_open box_4"></span>
                    <span className="menu_close close_1"></span>
                    <span className="menu_close close_2"></span>
                </div>

                <div className="nav_items">
                    <Link to="/gpa" onClick={toggleOpen}  className="nav_links">GPA Calc</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">CGPA Calc</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">Attendence Calc</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">Syllabus</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">Results</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">College Review</Link>
                    <Link to="/" onClick={toggleOpen}  className="nav_links">Dev Hub</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header