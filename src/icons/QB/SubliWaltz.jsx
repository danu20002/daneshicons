import React from 'react';

export const iconData = {
  "id": "SubliWaltz",
  "name": "SubliWaltz",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 12.00 a 6.20 6.20 0 1 0 12.41 0 a 6.20 6.20 0 1 0 -12.41 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ]
  ]
};

export const SubliWaltz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" />
      <path d="M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0" />
      <path d="M 5.80 12.00 a 6.20 6.20 0 1 0 12.41 0 a 6.20 6.20 0 1 0 -12.41 0" stroke-dasharray="3 2" />
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      {children}
    </svg>
  );
});

export default SubliWaltz;
