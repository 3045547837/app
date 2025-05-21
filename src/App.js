import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/Welcome/Welcome';
import Interview from './pages/Interview/Interview';
import AcceptChallenge from './pages/AcceptChallenge/AcceptChallenge';
import Challenge from './pages/Challenge/Challenge';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={currentStep === 1 ? <WelcomePage onNext={handleNextStep} /> : <Navigate to="/interview" />}
        />
        <Route
          path="/interview"
          element={currentStep === 2 ? <Interview onNext={handleNextStep} /> : <Navigate to="/accept" />}
        />
        <Route
          path="/accept"
          element={currentStep === 3 ? <AcceptChallenge onNext={handleNextStep} /> : <Navigate to="/challenge" />}
        />
        <Route
          path="/challenge"
          element={currentStep === 4 ? <Challenge /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
