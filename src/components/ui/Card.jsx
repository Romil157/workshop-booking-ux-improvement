import React from 'react';
import './Card.css';

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`ui-card ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return <div className={`ui-card__header ${className}`} {...props}>{children}</div>;
}

export function CardBody({ children, className = '', ...props }) {
  return <div className={`ui-card__body ${className}`} {...props}>{children}</div>;
}

export function CardFooter({ children, className = '', ...props }) {
  return <div className={`ui-card__footer ${className}`} {...props}>{children}</div>;
}
