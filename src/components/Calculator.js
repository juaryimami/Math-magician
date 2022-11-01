import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './ButtonsTable';
import Display from './Display';
import calculate from '../logic/calculate';
import Navbar from './Navebar';
import home from './Home';
import Quote from './Qoute';

const Calculator = () => {
  const [status, setStatus] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const target = e.target.dataset.name;
    const newState = calculate(status, target);
    setStatus((prevState) => ({ ...prevState, ...newState }));
  };

  const handleKey = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {home}
        </Route>
        <Route path="/calculator">
          <div className="parent_calc">
            <p>Hi there....</p>
            <div className="calculator-container">
              <div className="hero-container">
                <Display input={status.total} next={status.next} operation={status.operation} />
                <MainContainer event={handleClick} keyDown={handleKey} />
              </div>
            </div>
          </div>

        </Route>
        <Route path="/quote">
          {Quote}
        </Route>
      </Switch>
    </>

  );
};

export default Calculator;
