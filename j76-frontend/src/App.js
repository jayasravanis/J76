import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Summary from './Summary/Summary';
import Reports from './Reports/Reports';
import './App.css';
import ProtectedRoute from './ProtectedRoute';

function App() {
    const { isAuthenticated, setIsAuthenticated, setAuthMessage } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setAuthMessage(""); // Clear auth messages
    };

    return (
        <Router>
            {isAuthenticated && <Navbar onLogout={handleLogout} />}
            <div className="App" role="main">
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoute>
                                <Login />
                            </ProtectedRoute>
                            }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/summary"
                        element={
                            <ProtectedRoute>
                                <Summary />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/reports"
                        element={
                            <ProtectedRoute>
                                <Reports />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
