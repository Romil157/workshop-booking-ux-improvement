import React from 'react';
import './Button.css';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  loading = false,
  ...props 
}) {
  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    loading ? 'ui-button--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={loading || props.disabled} {...props}>
      {loading && <span className="ui-button__spinner" />}
      {!loading && leftIcon && <span className="ui-button__icon">{leftIcon}</span>}
      <span className="ui-button__text">{children}</span>
      {!loading && rightIcon && <span className="ui-button__icon">{rightIcon}</span>}
    </button>
  );
}
