import { Notification } from 'components/Notification/Notification';
import { StatisticsWraper } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  if (total !== 0) {
    return (
      <StatisticsWraper>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {percent} %</p>
      </StatisticsWraper>
    );
  } else {
    return <Notification />;
  }
};
