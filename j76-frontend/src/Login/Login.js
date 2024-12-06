import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import axios from 'axios';
import { BASE_URL } from '../properties';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { setIsAuthenticated, authMessage } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/login`, {
                username,
                password,
            });
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                setIsAuthenticated(true);
                navigate('/dashboard');
                setError('');
            }
        } catch (err) {
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card" role="form" aria-labelledby="login-form-title">
                <h2 id="login-form-title" className="login-title">Welcome</h2>
                {authMessage && <p style={{ color: 'red' }} aria-live="polite">{authMessage}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            aria-required="true"
                        />
                    </div>
                    <button type="submit" className="login-button" aria-label="Log in">
                        Log In
                    </button>
                </form>
                {error && <p className="error-message" role="alert">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
