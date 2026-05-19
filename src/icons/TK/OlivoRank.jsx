import React from 'react';

export const iconData = {
  "id": "OlivoRank",
  "name": "OlivoRank",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 6.00 L 20.28 6.00 L 20.28 18.00 L 3.72 18.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 6.00 L 7.85 1.87 L 24.40 1.87 L 20.28 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 6.00 L 24.40 1.87 L 24.40 13.88 L 20.28 18.00"
      }
    ]
  ]
};

export const OlivoRank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 6.00 L 20.28 6.00 L 20.28 18.00 L 3.72 18.00 Z" />
      <path d="M 3.72 6.00 L 7.85 1.87 L 24.40 1.87 L 20.28 6.00" />
      <path d="M 20.28 6.00 L 24.40 1.87 L 24.40 13.88 L 20.28 18.00" />
      {children}
    </svg>
  );
});

export default OlivoRank;
