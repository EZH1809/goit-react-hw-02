import style from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback, percentPositive }) {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {isNaN(percentPositive) ? 0 : percentPositive}%</p>
    </div>
  );
}
