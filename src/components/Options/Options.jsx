import css from './Options.module.css';

export const ClickBtns = ({ onCount, hasFeedbacks, onReset }) => {
  return (
    <ul className={css.btnList}>
      <li>
        <button onClick={() => onCount('good')} className={css.button}>
          Good
        </button>
      </li>
      <li>
        <button onClick={() => onCount('neutral')} className={css.button}>
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => onCount('bad')} className={css.button}>
          Bad
        </button>
      </li>
      <li>
        {hasFeedbacks && (
          <button onClick={onReset} className={css.button}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};
