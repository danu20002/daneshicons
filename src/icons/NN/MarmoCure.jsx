import React from 'react';

export const iconData = {
  "id": "MarmoCure",
  "name": "MarmoCure",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 7.37 a 8.01 2.4037169745273417 0 1 0 16.02 0 a 8.01 2.4037169745273417 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 2.7755732845980674 0 1 0 18.50 0 a 9.25 2.7755732845980674 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 16.63 a 8.01 2.4037169745273417 0 1 0 16.02 0 a 8.01 2.4037169745273417 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 3.99 A 2 2 0 0 0 16.63 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 3.99 A 2 2 0 0 1 16.63 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 3.99 A 2 2 0 0 0 7.37 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 3.99 A 2 2 0 0 1 7.37 20.01"
      }
    ]
  ]
};

export const MarmoCure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0" />
      <path d="M 3.99 7.37 a 8.01 2.4037169745273417 0 1 0 16.02 0 a 8.01 2.4037169745273417 0 1 0 -16.02 0" />
      <path d="M 2.75 12.00 a 9.25 2.7755732845980674 0 1 0 18.50 0 a 9.25 2.7755732845980674 0 1 0 -18.50 0" />
      <path d="M 3.99 16.63 a 8.01 2.4037169745273417 0 1 0 16.02 0 a 8.01 2.4037169745273417 0 1 0 -16.02 0" />
      <path d="M 16.63 3.99 A 2 2 0 0 0 16.63 20.01" />
      <path d="M 16.63 3.99 A 2 2 0 0 1 16.63 20.01" />
      <path d="M 7.37 3.99 A 2 2 0 0 0 7.37 20.01" />
      <path d="M 7.37 3.99 A 2 2 0 0 1 7.37 20.01" />
      {children}
    </svg>
  );
});

export default MarmoCure;
