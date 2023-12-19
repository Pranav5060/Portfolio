import "./NavbarStyles.css";
import React from "react";
import Project from "./Project";
import Contact from "./Contact";
import { HashLink as Link } from "react-router-hash-link";
//import {FaBars,FaTimes} from 'react-icons/fa';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
const Navbar =() =>{
    return (
        <div className="header">
            <Link to ="/">
                <h1><Person2SharpIcon style={{color:"white"}}></Person2SharpIcon> Portfolio</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/" className="active">
                        <h1>Home</h1>
                    </Link>
                </li>
                <li>
                    <Link to="#proj" className="active">
                        <h1>Project</h1>
                    </Link>
                </li>
                <li>
                    <Link to="#Contact" className="active">
                        <h1>Contact</h1>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;