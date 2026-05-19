import React from 'react';

export const iconData = {
  "id": "VenustoFlair",
  "name": "VenustoFlair",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.37 12.00 a 9.63 9.63 0 1 0 19.25 0 a 9.63 9.63 0 1 0 -19.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 7.19 a 8.34 2.5012314244822003 0 1 0 16.67 0 a 8.34 2.5012314244822003 0 1 0 -16.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 12.00 a 9.63 2.888173272460699 0 1 0 19.25 0 a 9.63 2.888173272460699 0 1 0 -19.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 16.81 a 8.34 2.5012314244822003 0 1 0 16.67 0 a 8.34 2.5012314244822003 0 1 0 -16.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.81 3.66 A 2 2 0 0 0 16.81 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 16.81 3.66 A 2 2 0 0 1 16.81 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 3.66 A 2 2 0 0 0 7.19 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 3.66 A 2 2 0 0 1 7.19 20.34"
      }
    ]
  ]
};

export const VenustoFlair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.37 12.00 a 9.63 9.63 0 1 0 19.25 0 a 9.63 9.63 0 1 0 -19.25 0" />
      <path d="M 3.66 7.19 a 8.34 2.5012314244822003 0 1 0 16.67 0 a 8.34 2.5012314244822003 0 1 0 -16.67 0" />
      <path d="M 2.37 12.00 a 9.63 2.888173272460699 0 1 0 19.25 0 a 9.63 2.888173272460699 0 1 0 -19.25 0" />
      <path d="M 3.66 16.81 a 8.34 2.5012314244822003 0 1 0 16.67 0 a 8.34 2.5012314244822003 0 1 0 -16.67 0" />
      <path d="M 16.81 3.66 A 2 2 0 0 0 16.81 20.34" />
      <path d="M 16.81 3.66 A 2 2 0 0 1 16.81 20.34" />
      <path d="M 7.19 3.66 A 2 2 0 0 0 7.19 20.34" />
      <path d="M 7.19 3.66 A 2 2 0 0 1 7.19 20.34" />
      {children}
    </svg>
  );
});

export default VenustoFlair;
