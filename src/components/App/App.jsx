import './App.module.css';
import { useState, useEffect } from 'react';
import Description from '../Description/Description.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Options/Options.jsx';
import Notification from '../Notification/Notification.jsx';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback-counts');
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  function updateFeedback(feedbackType) {
    setFeedback(prevCounts => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  }

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback-counts', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback =
    feedback.good + feedback.neutral + feedback.bad;
  const percentPositive =
    totalFeedback > 0
      ? Math.round(
          ((feedback.good + feedback.neutral) / totalFeedback) *
            100,
        )
      : 0;

  return (
    <>
      <Description
        header="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          percentPositive={percentPositive}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}
