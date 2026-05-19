import React from 'react';

export const iconData = {
  "id": "ScorpiRobin",
  "name": "ScorpiRobin",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.85 12.00 Q 14.59 13.50 16.43 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 19.67 Q 12.00 14.99 7.57 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 19.67 Q 9.41 13.50 3.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 12.00 Q 9.41 10.50 7.57 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 4.33 Q 12.00 9.01 16.43 4.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 4.33 Q 14.59 10.50 20.85 12.00"
      }
    ]
  ]
};

export const ScorpiRobin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.85 12.00 Q 14.59 13.50 16.43 19.67" />
      <path d="M 16.43 19.67 Q 12.00 14.99 7.57 19.67" />
      <path d="M 7.57 19.67 Q 9.41 13.50 3.15 12.00" />
      <path d="M 3.15 12.00 Q 9.41 10.50 7.57 4.33" />
      <path d="M 7.57 4.33 Q 12.00 9.01 16.43 4.33" />
      <path d="M 16.43 4.33 Q 14.59 10.50 20.85 12.00" />
      {children}
    </svg>
  );
});

export default ScorpiRobin;
