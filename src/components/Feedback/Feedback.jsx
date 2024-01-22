import css from './Feedback.module.css';

export const Feedback = ({ values: { good, neutral, bad }, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.container}>
      <li className={css.list}>
        Good: <span className={css.wrap}>{good}</span>
      </li>
      <li className={css.list}>
        Neutral: <span className={css.wrap}>{neutral}</span>
      </li>
      <li className={css.list}>
        Bad: <span className={css.wrap}>{bad}</span>
      </li>
      <li className={css.list}>
        Total: <span className={css.wrap}>{totalFeedback}</span>
      </li>
      <li className={css.list}>
        Positive: <span className={css.wrap}>{positiveFeedback}%</span>
      </li>
    </ul>
  );
};
