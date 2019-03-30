// @flow
import React from 'react';
import './Home.css';

type Props = {
  currentCount: number,
  onIncrementClick: () => {},
  onDecrementClick: () => {},
};

function HomeComponent({
  currentCount,
  onIncrementClick,
  onDecrementClick,
}: Props) {
  return (
    <div className="container">
      <div className="heading">
        <h1>React-Redux-starter-kit</h1>
        <h3>with counter example</h3>
      </div>
      <div className="example">
        <p>current count: {currentCount}</p>
        <button type="button" onClick={onIncrementClick}>
          Increment
        </button>
        <button type="button" onClick={onDecrementClick}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;
