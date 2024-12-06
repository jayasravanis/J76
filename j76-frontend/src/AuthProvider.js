import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { BASE_URL } from './properties';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authMessage, setAuthMessage] = useState("");

    const refreshToken = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.post(`${BASE_URL}/api/refresh`, null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                localStorage.setItem('token', response.data);
            } catch (err) {
                console.error("Failed to refresh token:", err);
                logout();
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setAuthMessage("Your session has expired. Please log in again.");
    };

    const validateToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const now = Date.now() / 1000; // Current time in seconds
                if (decoded.exp > now) {
                    return true;
                } else {
                    logout();
                    return false;
                }
            } catch (err) {
                logout();
                return false;
            }
        }
        return false;
    };

    useEffect(() => {
        const handleActivity = () => {
            const isValid = validateToken();
            if (isValid) {
                refreshToken(); // Refresh token on activity
                setIsAuthenticated(true);
            }
        };

        const events = ['keydown', 'click'];
        events.forEach((event) => window.addEventListener(event, handleActivity));

        // Initial validation on load
        if (validateToken()) {
            setIsAuthenticated(true);
        }

        return () => {
            events.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, authMessage, setAuthMessage, setIsAuthenticated, validateToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
