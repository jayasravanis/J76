import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, validateToken } = useAuth();
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Skip token validation for the login route
        if (location.pathname === "/login") {
            setRedirectToLogin(false);
            return;
        }

        const tokenIsValid = validateToken();
        if (!tokenIsValid) {
            setRedirectToLogin(true);
        }
    }, [validateToken, location.pathname]);

    // If user is authenticated and trying to access the login page, redirect to dashboard
    if (isAuthenticated && location.pathname === "/login") {
        return <Navigate to="/dashboard" />;
    }

    // If token is invalid or expired, redirect to login
    if (redirectToLogin && location.pathname !== "/login") {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
