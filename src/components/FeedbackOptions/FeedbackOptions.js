// import counter from '../App.jsx';

export const FeedbackOptions = ({
  neutral,
  bad,
  counter,
  leaveFeedback,
  option,
  good,
}) => {
  return (
    <div>
      <button
        type="batton"
        onClick={() => {
          leaveFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="batton"
        onClick={() => {
          leaveFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="batton"
        onClick={() => {
          leaveFeedback('bad');
        }}
      >
        Bad
      </button>
    </div>
  );
};
