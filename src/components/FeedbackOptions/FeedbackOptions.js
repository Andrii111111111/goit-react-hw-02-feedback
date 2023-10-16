import { ButtonWraper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  neutral,
  bad,
  counter,
  leaveFeedback,
  option,
  good,
}) => {
  return (
    <ButtonWraper>
      <button
        type="button"
        onClick={() => {
          leaveFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          leaveFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          leaveFeedback('bad');
        }}
      >
        Bad
      </button>
    </ButtonWraper>
  );
};
