import React from 'react';

export const iconData = {
  "id": "XilinoHard",
  "name": "XilinoHard",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 12.00 a 2.39 2.39 0 1 0 4.79 0 a 2.39 2.39 0 1 0 -4.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 12.00 a 4.98 4.98 0 1 0 9.95 0 a 4.98 4.98 0 1 0 -9.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 12.00 a 7.80 7.80 0 1 0 15.61 0 a 7.80 7.80 0 1 0 -15.61 0"
      }
    ]
  ]
};

export const XilinoHard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 12.00 a 2.39 2.39 0 1 0 4.79 0 a 2.39 2.39 0 1 0 -4.79 0" />
      <path d="M 7.02 12.00 a 4.98 4.98 0 1 0 9.95 0 a 4.98 4.98 0 1 0 -9.95 0" />
      <path d="M 4.20 12.00 a 7.80 7.80 0 1 0 15.61 0 a 7.80 7.80 0 1 0 -15.61 0" />
      {children}
    </svg>
  );
});

export default XilinoHard;
