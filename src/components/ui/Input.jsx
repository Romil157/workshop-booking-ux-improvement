import React, { forwardRef } from 'react';
import './Input.css';

export const Input = forwardRef(({ label, error, className = '', ...props }, ref) => {
  const id = props.id || props.name;
  return (
    <div className={`ui-input-wrapper ${className}`}>
      {label && <label htmlFor={id} className="ui-label">{label}</label>}
      <input
        ref={ref}
        id={id}
        className={`ui-input ${error ? 'ui-input--error' : ''}`}
        {...props}
      />
      {error && <span className="ui-error-text">{error}</span>}
    </div>
  );
});

export const TextArea = forwardRef(({ label, error, className = '', ...props }, ref) => {
  const id = props.id || props.name;
  return (
    <div className={`ui-input-wrapper ${className}`}>
      {label && <label htmlFor={id} className="ui-label">{label}</label>}
      <textarea
        ref={ref}
        id={id}
        className={`ui-input ui-textarea ${error ? 'ui-input--error' : ''}`}
        {...props}
      />
      {error && <span className="ui-error-text">{error}</span>}
    </div>
  );
});
