import React from 'react';

export const iconData = {
  "id": "TaloFlap",
  "name": "TaloFlap",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 9.23 0 1 0 18.46 0 a 9.23 9.23 0 1 0 -18.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 2.7691784399561583 0 1 0 18.46 0 a 9.23 2.7691784399561583 0 1 0 -18.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.77 A 2 2 0 0 0 12.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.77 A 2 2 0 0 1 12.00 21.23"
      }
    ]
  ]
};

export const TaloFlap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 12.00 a 9.23 9.23 0 1 0 18.46 0 a 9.23 9.23 0 1 0 -18.46 0" />
      <path d="M 2.77 12.00 a 9.23 2.7691784399561583 0 1 0 18.46 0 a 9.23 2.7691784399561583 0 1 0 -18.46 0" />
      <path d="M 12.00 2.77 A 2 2 0 0 0 12.00 21.23" />
      <path d="M 12.00 2.77 A 2 2 0 0 1 12.00 21.23" />
      {children}
    </svg>
  );
});

export default TaloFlap;
