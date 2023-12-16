import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Result from './Components/Result';
import Quiz from './Components/Quiz';
import FrontPage from './Components/FrontPage/FrontPage';
import Start from './Components/Start';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  );
};

export default Navigation;