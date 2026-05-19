import React from 'react';

export const iconData = {
  "id": "ValvolaPath",
  "name": "ValvolaPath",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.30 12.00 Q 15.80 13.24 18.71 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 18.71 16.88 Q 14.35 15.23 14.56 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 19.89 Q 12.00 16.00 9.44 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 19.89 Q 9.65 15.23 5.29 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 16.88 Q 8.20 13.24 3.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 Q 8.20 10.76 5.29 7.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 7.12 Q 9.65 8.77 9.44 4.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 4.11 Q 12.00 8.00 14.56 4.11"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 4.11 Q 14.35 8.77 18.71 7.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.71 7.12 Q 15.80 10.76 20.30 12.00"
      }
    ]
  ]
};

export const ValvolaPath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.30 12.00 Q 15.80 13.24 18.71 16.88" />
      <path d="M 18.71 16.88 Q 14.35 15.23 14.56 19.89" />
      <path d="M 14.56 19.89 Q 12.00 16.00 9.44 19.89" />
      <path d="M 9.44 19.89 Q 9.65 15.23 5.29 16.88" />
      <path d="M 5.29 16.88 Q 8.20 13.24 3.70 12.00" />
      <path d="M 3.70 12.00 Q 8.20 10.76 5.29 7.12" />
      <path d="M 5.29 7.12 Q 9.65 8.77 9.44 4.11" />
      <path d="M 9.44 4.11 Q 12.00 8.00 14.56 4.11" />
      <path d="M 14.56 4.11 Q 14.35 8.77 18.71 7.12" />
      <path d="M 18.71 7.12 Q 15.80 10.76 20.30 12.00" />
      {children}
    </svg>
  );
});

export default ValvolaPath;
