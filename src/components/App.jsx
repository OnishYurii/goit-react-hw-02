import { useState } from 'react';
import { Description } from './Description/Description';
import { ClickBtns } from './Options/Options';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = type => {
    setCount({ ...count, [type]: count[type] + 1 });
  };
  return (
    <div>
      <Description />
      <ClickBtns onCount={handleClick} />
    </div>
  );
};
