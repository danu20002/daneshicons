import React from 'react';

export const iconData = {
  "id": "RoboFascinate",
  "name": "RoboFascinate",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.98 0 a 8.99 8.99 0 1 0 -17.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 9.00 a 8.47 2.542196102654868 0 1 0 16.95 0 a 8.47 2.542196102654868 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 15.00 a 8.47 2.542196102654868 0 1 0 16.95 0 a 8.47 2.542196102654868 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.36 5.64 A 2 2 0 0 0 18.36 18.36"
      }
    ],
    [
      "path",
      {
        "d": "M 18.36 5.64 A 2 2 0 0 1 18.36 18.36"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.01 A 2 2 0 0 0 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.01 A 2 2 0 0 1 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 5.64 A 2 2 0 0 0 5.64 18.36"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 5.64 A 2 2 0 0 1 5.64 18.36"
      }
    ]
  ]
};

export const RoboFascinate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.98 0 a 8.99 8.99 0 1 0 -17.98 0" />
      <path d="M 3.53 9.00 a 8.47 2.542196102654868 0 1 0 16.95 0 a 8.47 2.542196102654868 0 1 0 -16.95 0" />
      <path d="M 3.53 15.00 a 8.47 2.542196102654868 0 1 0 16.95 0 a 8.47 2.542196102654868 0 1 0 -16.95 0" />
      <path d="M 18.36 5.64 A 2 2 0 0 0 18.36 18.36" />
      <path d="M 18.36 5.64 A 2 2 0 0 1 18.36 18.36" />
      <path d="M 12.00 3.01 A 2 2 0 0 0 12.00 20.99" />
      <path d="M 12.00 3.01 A 2 2 0 0 1 12.00 20.99" />
      <path d="M 5.64 5.64 A 2 2 0 0 0 5.64 18.36" />
      <path d="M 5.64 5.64 A 2 2 0 0 1 5.64 18.36" />
      {children}
    </svg>
  );
});

export default RoboFascinate;
