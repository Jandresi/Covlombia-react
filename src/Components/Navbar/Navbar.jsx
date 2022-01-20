import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navegacion">
            <h1 className='titulo'>COVLOMBIA</h1>
            {/* <Link className="link" to="/Covlombia-react">SITUACIÓN GENERAL</Link>
            <Link className="link" to="/Covlombia-react/departamentos">SITUACIÓN POR DEPARTAMENTOS</Link>
            <Link className="link" to="/Covlombia-react/valle-del-cauca">VALLE DEL CAUCA</Link> */}
        </nav>
    )
}

export default Navbar
