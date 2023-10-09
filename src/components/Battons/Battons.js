// import counter from '../App.jsx';

export const Battons = ({ good, neutral, bad, counter, newValue }) => {
  return (
    <div>
      <button type="batton" onClick={() => counter(good)}>
        Good
      </button>
      <button type="batton" onClick={() => counter()}>
        Neutral
      </button>
      <button type="batton" onClick={() => counter()}>
        Bad
      </button>
    </div>
  );
};
