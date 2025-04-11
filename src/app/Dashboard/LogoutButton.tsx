import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the bearer token from local storage
    localStorage.removeItem('bearerToken');

    // Redirect to the home page
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;