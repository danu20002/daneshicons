import React from 'react';

export const iconData = {
  "id": "ValchiriaWinner",
  "name": "ValchiriaWinner",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 6.94 L 20.11 6.94 L 20.11 17.06 L 3.89 17.06 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 6.94 L 8.10 2.73 L 24.33 2.73 L 20.11 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 6.94 L 24.33 2.73 L 24.33 12.84 L 20.11 17.06"
      }
    ]
  ]
};

export const ValchiriaWinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 6.94 L 20.11 6.94 L 20.11 17.06 L 3.89 17.06 Z" />
      <path d="M 3.89 6.94 L 8.10 2.73 L 24.33 2.73 L 20.11 6.94" />
      <path d="M 20.11 6.94 L 24.33 2.73 L 24.33 12.84 L 20.11 17.06" />
      {children}
    </svg>
  );
});

export default ValchiriaWinner;
