import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { ClickBtns } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

const getInitialValues = () => {
  const savedValues = window.localStorage.getItem('saved-values');
  if (savedValues !== null) {
    return JSON.parse(savedValues);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [count, setCount] = useState(getInitialValues);

  const handleCount = option => {
    setCount({ ...count, [option]: count[option] + 1 });
  };

  const handleReset = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(count));
  }, [count]);

  const totalFeedback = count.good + count.neutral + count.bad;

  const positiveFeedback = Math.round(((count.good + count.neutral) / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <ClickBtns onCount={handleCount} hasFeedbacks={!!totalFeedback} onReset={handleReset} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          values={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};
