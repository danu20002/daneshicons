import React from 'react';

export const iconData = {
  "id": "NasoDrop",
  "name": "NasoDrop",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.34 0 a 8.17 8.17 0 1 0 -16.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 9.28 a 7.70 2.310715248566914 0 1 0 15.40 0 a 7.70 2.310715248566914 0 1 0 -15.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 14.72 a 7.70 2.310715248566914 0 1 0 15.40 0 a 7.70 2.310715248566914 0 1 0 -15.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 4.92 A 2 2 0 0 0 16.08 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 4.92 A 2 2 0 0 1 16.08 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 4.92 A 2 2 0 0 0 7.92 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 4.92 A 2 2 0 0 1 7.92 19.08"
      }
    ]
  ]
};

export const NasoDrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.34 0 a 8.17 8.17 0 1 0 -16.34 0" />
      <path d="M 4.30 9.28 a 7.70 2.310715248566914 0 1 0 15.40 0 a 7.70 2.310715248566914 0 1 0 -15.40 0" />
      <path d="M 4.30 14.72 a 7.70 2.310715248566914 0 1 0 15.40 0 a 7.70 2.310715248566914 0 1 0 -15.40 0" />
      <path d="M 16.08 4.92 A 2 2 0 0 0 16.08 19.08" />
      <path d="M 16.08 4.92 A 2 2 0 0 1 16.08 19.08" />
      <path d="M 7.92 4.92 A 2 2 0 0 0 7.92 19.08" />
      <path d="M 7.92 4.92 A 2 2 0 0 1 7.92 19.08" />
      {children}
    </svg>
  );
});

export default NasoDrop;
