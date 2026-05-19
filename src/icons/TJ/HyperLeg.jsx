import React from 'react';

export const iconData = {
  "id": "HyperLeg",
  "name": "HyperLeg",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 12.00 a 9.71 9.71 0 1 0 19.42 0 a 9.71 9.71 0 1 0 -19.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.29 12.00 a 9.71 2.9129794977139682 0 1 0 19.42 0 a 9.71 2.9129794977139682 0 1 0 -19.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.29 A 2 2 0 0 0 12.00 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.29 A 2 2 0 0 1 12.00 21.71"
      }
    ]
  ]
};

export const HyperLeg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 12.00 a 9.71 9.71 0 1 0 19.42 0 a 9.71 9.71 0 1 0 -19.42 0" />
      <path d="M 2.29 12.00 a 9.71 2.9129794977139682 0 1 0 19.42 0 a 9.71 2.9129794977139682 0 1 0 -19.42 0" />
      <path d="M 12.00 2.29 A 2 2 0 0 0 12.00 21.71" />
      <path d="M 12.00 2.29 A 2 2 0 0 1 12.00 21.71" />
      {children}
    </svg>
  );
});

export default HyperLeg;
