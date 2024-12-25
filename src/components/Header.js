import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Task Manager</Link>
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">All Tasks</Link>
                    <Link to="/category/Work" className="nav-link">Work</Link>
                    <Link to="/category/Personal" className="nav-link">Personal</Link>
                    <Link to="/category/School" className="nav-link">School</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;