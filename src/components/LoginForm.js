import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function LoginForm({ onSignUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogIn = async (e) => {
      e.preventDefault();
      setError(null);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail('');
        setPassword('');
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
    };

    onSignUp = () => {
      navigate('/signup');
    };

    const styles = {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: "open sans"
     // You may need to set a height for the flex container
    };
    const accentStyles = {
      color: "#0C2F65",
      fontWeight: "bold",
      fontFamily: "oswald"
    }
    const formStyles = {
      display: "flex",
      backgroundColor: "#0C2F65",
      border: "solid 3px #F17405",
      flexDirection: "column",
      alignItems: "center",
      height: "150px",
      width: "300px",
      borderRadius: "10px"
    }
  
    const inputStyles = {
      padding: "10px",
      margin: "10px",
      textAlign: "center",
      width: "200px",
    }
  
  return (
    <div style={styles}>
      <h1 style={accentStyles}>Bluewood Bangers</h1>
      <h2>Welcome!</h2>
      <form onSubmit={handleLogIn} style={ formStyles }>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style = { inputStyles }
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style = { inputStyles }
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={onSignUp} style={{padding: "6px", margin:"5px"}}>Create Account</button>
    </div>
  );
}

export default LoginForm;
