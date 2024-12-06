import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the styles

function Navbar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login'); // Redirect to login after logout
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-links">
                    <Link to="/dashboard" className="navbar-link">Dashboard</Link>
                    <Link to="/summary" className="navbar-link">Summary</Link>
                    <Link to="/reports" className="navbar-link">Reports</Link>
                </div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
        </header>
    );
}

export default Navbar;
