import React from 'react';

export const iconData = {
  "id": "NeuroOffset",
  "name": "NeuroOffset",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 12.00 a 8.33 8.33 0 1 0 16.66 0 a 8.33 8.33 0 1 0 -16.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 9.22 a 7.85 2.3563089177155003 0 1 0 15.71 0 a 7.85 2.3563089177155003 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 14.78 a 7.85 2.3563089177155008 0 1 0 15.71 0 a 7.85 2.3563089177155008 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.17 4.79 A 2 2 0 0 0 16.17 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.17 4.79 A 2 2 0 0 1 16.17 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 4.79 A 2 2 0 0 0 7.83 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 4.79 A 2 2 0 0 1 7.83 19.21"
      }
    ]
  ]
};

export const NeuroOffset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 12.00 a 8.33 8.33 0 1 0 16.66 0 a 8.33 8.33 0 1 0 -16.66 0" />
      <path d="M 4.15 9.22 a 7.85 2.3563089177155003 0 1 0 15.71 0 a 7.85 2.3563089177155003 0 1 0 -15.71 0" />
      <path d="M 4.15 14.78 a 7.85 2.3563089177155008 0 1 0 15.71 0 a 7.85 2.3563089177155008 0 1 0 -15.71 0" />
      <path d="M 16.17 4.79 A 2 2 0 0 0 16.17 19.21" />
      <path d="M 16.17 4.79 A 2 2 0 0 1 16.17 19.21" />
      <path d="M 7.83 4.79 A 2 2 0 0 0 7.83 19.21" />
      <path d="M 7.83 4.79 A 2 2 0 0 1 7.83 19.21" />
      {children}
    </svg>
  );
});

export default NeuroOffset;
