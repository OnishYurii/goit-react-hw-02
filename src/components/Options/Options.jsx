export const ClickBtns = ({ onCount }) => {
  return (
    <ul>
      <li>
        <button onClick={() => onCount('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => onCount('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onCount('bad')}>Bad</button>
      </li>
      <li>
        <button>Reset</button>
      </li>
    </ul>
  );
};
