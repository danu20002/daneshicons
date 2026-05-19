import React from 'react';

export const iconData = {
  "id": "SpiriQuip",
  "name": "SpiriQuip",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.83 0 a 2.42 2.42 0 1 0 -4.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.03 0 a 8.02 8.02 0 1 0 -16.03 0"
      }
    ]
  ]
};

export const SpiriQuip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.83 0 a 2.42 2.42 0 1 0 -4.83 0" />
      <path d="M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0" />
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.03 0 a 8.02 8.02 0 1 0 -16.03 0" />
      {children}
    </svg>
  );
});

export default SpiriQuip;
