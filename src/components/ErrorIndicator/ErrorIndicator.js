import React from 'react';
import error from './cross.svg';
import './ErrorIndicator.css';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img alt="error" src={error} />
    <span>Something went wrong</span>
    <span>we are trying to solve this problem</span>
  </div>
);

export default ErrorIndicator;