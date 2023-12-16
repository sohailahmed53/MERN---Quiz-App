import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../Context/QuizHolder'; 
import './registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleRegistration = async () => {
    // Your registration logic here...

   
    startQuiz();
    navigate('/quiz'); // Navigate to the quiz page
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegistration}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>

      {/* Add Start Quiz button */}
      <button onClick={() => { startQuiz(); navigate('/quiz'); }}>
        Start Quiz
      </button>
    </div>
  );
};

export default Registration;
