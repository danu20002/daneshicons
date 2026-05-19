import React from 'react';

export const iconData = {
  "id": "JunctoNow",
  "name": "JunctoNow",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 12.00 a 4.29 4.29 0 1 0 8.57 0 a 4.29 4.29 0 1 0 -8.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.00 a 6.42 6.42 0 1 0 12.83 0 a 6.42 6.42 0 1 0 -12.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const JunctoNow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0" />
      <path d="M 7.71 12.00 a 4.29 4.29 0 1 0 8.57 0 a 4.29 4.29 0 1 0 -8.57 0" />
      <path d="M 5.58 12.00 a 6.42 6.42 0 1 0 12.83 0 a 6.42 6.42 0 1 0 -12.83 0" />
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default JunctoNow;
