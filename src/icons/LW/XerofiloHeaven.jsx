import React from 'react';

export const iconData = {
  "id": "XerofiloHeaven",
  "name": "XerofiloHeaven",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 12.00 Q 13.99 12.53 19.89 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 16.55 Q 13.46 13.46 16.55 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 19.89 Q 12.53 13.99 12.00 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.11 Q 11.47 13.99 7.45 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 19.89 Q 10.54 13.46 4.11 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 16.55 Q 10.01 12.53 2.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 12.00 Q 10.01 11.47 4.11 7.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 7.45 Q 10.54 10.54 7.45 4.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 4.11 Q 11.47 10.01 12.00 2.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.89 Q 12.53 10.01 16.55 4.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 4.11 Q 13.46 10.54 19.89 7.45"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 7.45 Q 13.99 11.47 21.11 12.00"
      }
    ]
  ]
};

export const XerofiloHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 21.11 12.00 Q 13.99 12.53 19.89 16.55" />
      <path d="M 19.89 16.55 Q 13.46 13.46 16.55 19.89" />
      <path d="M 16.55 19.89 Q 12.53 13.99 12.00 21.11" />
      <path d="M 12.00 21.11 Q 11.47 13.99 7.45 19.89" />
      <path d="M 7.45 19.89 Q 10.54 13.46 4.11 16.55" />
      <path d="M 4.11 16.55 Q 10.01 12.53 2.89 12.00" />
      <path d="M 2.89 12.00 Q 10.01 11.47 4.11 7.45" />
      <path d="M 4.11 7.45 Q 10.54 10.54 7.45 4.11" />
      <path d="M 7.45 4.11 Q 11.47 10.01 12.00 2.89" />
      <path d="M 12.00 2.89 Q 12.53 10.01 16.55 4.11" />
      <path d="M 16.55 4.11 Q 13.46 10.54 19.89 7.45" />
      <path d="M 19.89 7.45 Q 13.99 11.47 21.11 12.00" />
      {children}
    </svg>
  );
});

export default XerofiloHeaven;
