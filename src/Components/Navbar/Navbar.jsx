import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navegacion">
            <Link className="link" to="/">SITUACIÓN GENERAL</Link>
            <Link className="link" to="departamentos">SITUACIÓN POR DEPARTAMENTOS</Link>
            <Link className="link" to="valleDelCauca">VALLE DEL CAUCA</Link>
        </nav>
    )
}

export default Navbar
