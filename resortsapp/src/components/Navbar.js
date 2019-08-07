import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa';
import logo from "../imagesFl/logo.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    state = {
        isOpen: false
    }
    handleToggle = ()  => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <nav className="navbar">
             <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" >
                        <img src={logo} alt="Resor Main Page" /> 
                    </Link>
                 </div>
             </div>
                Hello from Navbar
            </nav>
        )
    }
}
