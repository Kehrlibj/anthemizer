import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function HomePage({ user }) {
  const navigate = useNavigate();
  // Styles
  const styles = {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "open sans"
  };
  const accentStyles = {
    color: "#0C2F65",
    fontWeight: "bold",
    fontFamily: "oswald"
  }
  const inputStyles = {
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    width: "200px",
  }
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    border: "solid 3px #F17405",
    alignItems: 'center',
  }
  const buttonStyles = {
    margin: "10px",
    width: "100px",
  }


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
    <div style={styles}>
      <div style={containerStyles}>
      <input type="text" placeholder="Search..." style={inputStyles}/>
      <p style={accentStyles}>Welcome, {user ? user.email : ''}!</p>
      <button onClick={handleLogout} style={buttonStyles}>Log Out</button>
      </div>
    </div>
  );
}

export default HomePage;
