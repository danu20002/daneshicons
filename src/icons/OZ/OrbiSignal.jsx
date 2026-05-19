import React from 'react';

export const iconData = {
  "id": "OrbiSignal",
  "name": "OrbiSignal",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 8.70 a 9.34 2.803299972478483 0 1 0 18.69 0 a 9.34 2.803299972478483 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 15.30 a 9.34 2.803299972478483 0 1 0 18.69 0 a 9.34 2.803299972478483 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.42 A 2 2 0 0 0 16.96 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.42 A 2 2 0 0 1 16.96 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.42 A 2 2 0 0 0 7.04 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.42 A 2 2 0 0 1 7.04 20.58"
      }
    ]
  ]
};

export const OrbiSignal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0" />
      <path d="M 2.66 8.70 a 9.34 2.803299972478483 0 1 0 18.69 0 a 9.34 2.803299972478483 0 1 0 -18.69 0" />
      <path d="M 2.66 15.30 a 9.34 2.803299972478483 0 1 0 18.69 0 a 9.34 2.803299972478483 0 1 0 -18.69 0" />
      <path d="M 16.96 3.42 A 2 2 0 0 0 16.96 20.58" />
      <path d="M 16.96 3.42 A 2 2 0 0 1 16.96 20.58" />
      <path d="M 7.04 3.42 A 2 2 0 0 0 7.04 20.58" />
      <path d="M 7.04 3.42 A 2 2 0 0 1 7.04 20.58" />
      {children}
    </svg>
  );
});

export default OrbiSignal;
