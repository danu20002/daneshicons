import React from 'react';

export const iconData = {
  "id": "PhantoQuaver",
  "name": "PhantoQuaver",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 12.00 a 9.76 9.76 0 1 0 19.52 0 a 9.76 9.76 0 1 0 -19.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.24 12.00 a 9.76 2.928421611478552 0 1 0 19.52 0 a 9.76 2.928421611478552 0 1 0 -19.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.24 A 2 2 0 0 0 12.00 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.24 A 2 2 0 0 1 12.00 21.76"
      }
    ]
  ]
};

export const PhantoQuaver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 12.00 a 9.76 9.76 0 1 0 19.52 0 a 9.76 9.76 0 1 0 -19.52 0" />
      <path d="M 2.24 12.00 a 9.76 2.928421611478552 0 1 0 19.52 0 a 9.76 2.928421611478552 0 1 0 -19.52 0" />
      <path d="M 12.00 2.24 A 2 2 0 0 0 12.00 21.76" />
      <path d="M 12.00 2.24 A 2 2 0 0 1 12.00 21.76" />
      {children}
    </svg>
  );
});

export default PhantoQuaver;
