import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignUpForm({ onLogIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  onLogIn = () => {
    navigate('/login');
  };

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
  const formStyles = {
    display: "flex",
    backgroundColor: "#0C2F65",
    border: "solid 3px #F17405",
    flexDirection: "column",
    alignItems: "center",
    height: "300px",
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
      <h1 style={accentStyles}>Sign Up</h1>
      <form onSubmit={handleSignUp} style={ formStyles}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyles}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyles}
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          style={inputStyles}
        />
        <input
          type="referal"
          name="referalCode"
          value=""
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Referal Code (optional and not functional)"
          style={inputStyles}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={onLogIn}>Already have an account? Log in</button>
    </div>
  );
}

export default SignUpForm;
