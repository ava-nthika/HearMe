import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MoodInput from './components/MoodInput';
import MoodResult from './components/MoodResult';
import MoodHistory from './components/MoodHistory';
import WeeklyInsights from './components/WeeklyInsights';
import { detectMood } from './utils/moodLogic';

function App() {
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('moodHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleAnalyze = (text) => {
    setIsLoading(true);
    setCurrentResult(null);

    // Simulate analysis delay
    setTimeout(() => {
      const result = detectMood(text);
      setCurrentResult(result);

      // Update history
      const newHistory = [result, ...history];
      setHistory(newHistory);
      localStorage.setItem('moodHistory', JSON.stringify(newHistory));

      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="app-container">
      <Navbar />
      <MoodInput onAnalyze={handleAnalyze} isLoading={isLoading} />
      {currentResult && <MoodResult result={currentResult} />}
      <WeeklyInsights history={history} />
      <div style={{ marginTop: '2rem' }}>
        <MoodHistory history={history.slice(0, 5)} />
      </div>
    </div>
  );
}

export default App;
