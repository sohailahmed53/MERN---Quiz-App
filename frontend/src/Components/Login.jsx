import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../Context/QuizHolder'; 
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        startQuiz();
        navigate('/start');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
      {/* Add Start Quiz button */}
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Login;