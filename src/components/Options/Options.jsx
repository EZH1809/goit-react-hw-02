import style from './Options.module.css';

export default function Options({ updateFeedback, resetFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
}
