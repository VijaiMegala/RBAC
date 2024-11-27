import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ConfirmationModal from '../modal/ConfirmationModal';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Track modal visibility

  const handleLogout = () => {
    setIsModalOpen(true);  // Show the modal on logout click
  };

  const confirmLogout = () => {
    logout();  // Perform the logout action
    setIsModalOpen(false);  // Close the modal
  };

  const cancelLogout = () => {
    setIsModalOpen(false);  // Close the modal without logging out
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <div>
        <Link className="text-white mr-4" to="/">Users</Link>
        <Link className="text-white mr-4" to="/roles">Roles</Link>
        <Link className="text-white" to="/permissions">Permissions</Link>
      </div>
      {user ? (
        <button onClick={handleLogout} className="text-white">Logout</button>
      ) : (
        <Link className="text-white" to="/login">Login</Link>
      )}
      
      {/* Render the confirmation modal if it's open */}
      {isModalOpen && (
        <ConfirmationModal
          message="Are you sure you want to log out?"
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
