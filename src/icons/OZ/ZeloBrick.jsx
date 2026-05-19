import React from 'react';

export const iconData = {
  "id": "ZeloBrick",
  "name": "ZeloBrick",
  "category": "OZ",
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
        "d": "M 4.08 6.06 a 7.92 2.3747202913463115 0 1 0 15.83 0 a 7.92 2.3747202913463115 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 10.02 a 9.69 2.908426497815935 0 1 0 19.39 0 a 9.69 2.908426497815935 0 1 0 -19.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 13.98 a 9.69 2.908426497815935 0 1 0 19.39 0 a 9.69 2.908426497815935 0 1 0 -19.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 17.94 a 7.92 2.3747202913463115 0 1 0 15.83 0 a 7.92 2.3747202913463115 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 0 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 1 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 0 7.05 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 1 7.05 20.57"
      }
    ]
  ]
};

export const ZeloBrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 6.06 a 7.92 2.3747202913463115 0 1 0 15.83 0 a 7.92 2.3747202913463115 0 1 0 -15.83 0" />
      <path d="M 2.31 10.02 a 9.69 2.908426497815935 0 1 0 19.39 0 a 9.69 2.908426497815935 0 1 0 -19.39 0" />
      <path d="M 2.31 13.98 a 9.69 2.908426497815935 0 1 0 19.39 0 a 9.69 2.908426497815935 0 1 0 -19.39 0" />
      <path d="M 4.08 17.94 a 7.92 2.3747202913463115 0 1 0 15.83 0 a 7.92 2.3747202913463115 0 1 0 -15.83 0" />
      <path d="M 16.95 3.43 A 2 2 0 0 0 16.95 20.57" />
      <path d="M 16.95 3.43 A 2 2 0 0 1 16.95 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 0 7.05 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 1 7.05 20.57" />
      {children}
    </svg>
  );
});

export default ZeloBrick;
