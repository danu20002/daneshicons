import React from 'react';

export const iconData = {
  "id": "ViragoFeed",
  "name": "ViragoFeed",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 12.00 a 4.75 4.75 0 1 0 9.49 0 a 4.75 4.75 0 1 0 -9.49 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0",
        "stroke-dasharray": "3 3"
      }
    ]
  ]
};

export const ViragoFeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0" />
      <path d="M 7.25 12.00 a 4.75 4.75 0 1 0 9.49 0 a 4.75 4.75 0 1 0 -9.49 0" stroke-dasharray="4 2" />
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0" stroke-dasharray="3 3" />
      {children}
    </svg>
  );
});

export default ViragoFeed;
