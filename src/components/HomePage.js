import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function HomePage({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <p>Welcome, {user ? user.email : ''}!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default HomePage;
