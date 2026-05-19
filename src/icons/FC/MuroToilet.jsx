import React from 'react';

export const iconData = {
  "id": "MuroToilet",
  "name": "MuroToilet",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 0 10.42 0 a 5.21 5.21 0 1 0 -10.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ]
  ]
};

export const MuroToilet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0" />
      <path d="M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 0 10.42 0 a 5.21 5.21 0 1 0 -10.42 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0" stroke-dasharray="2 2" />
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      {children}
    </svg>
  );
});

export default MuroToilet;
