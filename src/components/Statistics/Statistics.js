import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  if (total !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {percent} %</p>
      </div>
    );
  } else {
    return <Notification />;
  }
};
