import React from 'react';

export const iconData = {
  "id": "NephroGoal",
  "name": "NephroGoal",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.11 12.00 a 9.89 9.89 0 1 0 19.79 0 a 9.89 9.89 0 1 0 -19.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 7.05 a 8.57 2.5704183178205247 0 1 0 17.14 0 a 8.57 2.5704183178205247 0 1 0 -17.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.11 12.00 a 9.89 2.96806341544725 0 1 0 19.79 0 a 9.89 2.96806341544725 0 1 0 -19.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 16.95 a 8.57 2.5704183178205247 0 1 0 17.14 0 a 8.57 2.5704183178205247 0 1 0 -17.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.11 A 2 2 0 0 0 12.00 21.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.11 A 2 2 0 0 1 12.00 21.89"
      }
    ]
  ]
};

export const NephroGoal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.11 12.00 a 9.89 9.89 0 1 0 19.79 0 a 9.89 9.89 0 1 0 -19.79 0" />
      <path d="M 3.43 7.05 a 8.57 2.5704183178205247 0 1 0 17.14 0 a 8.57 2.5704183178205247 0 1 0 -17.14 0" />
      <path d="M 2.11 12.00 a 9.89 2.96806341544725 0 1 0 19.79 0 a 9.89 2.96806341544725 0 1 0 -19.79 0" />
      <path d="M 3.43 16.95 a 8.57 2.5704183178205247 0 1 0 17.14 0 a 8.57 2.5704183178205247 0 1 0 -17.14 0" />
      <path d="M 12.00 2.11 A 2 2 0 0 0 12.00 21.89" />
      <path d="M 12.00 2.11 A 2 2 0 0 1 12.00 21.89" />
      {children}
    </svg>
  );
});

export default NephroGoal;
