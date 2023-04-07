import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


export default class Navbar extends Component {
    render() {
        return <>
        <nav className="navbar navbar-expand-lg bg-black navbar-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="Portfolio">Portfolio</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="About">About</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="Contact">Contact</Link>
        </li>
        
        
    </ul>
    
    </div>
    </div>
    </nav>
        
        
        
        
        
        
        
        
        
        </>
    }
}
