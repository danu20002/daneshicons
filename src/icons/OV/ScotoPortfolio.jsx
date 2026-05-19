import React from 'react';

export const iconData = {
  "id": "ScotoPortfolio",
  "name": "ScotoPortfolio",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 16.32 L 10.29 2.48"
      }
    ],
    [
      "path",
      {
        "d": "M 15.99 12.65 Q 16.31 11.99 6.82 9.18"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 14.76 A 2.54 3.59 146 0 1 12.01 21.10"
      }
    ]
  ]
};

export const ScotoPortfolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 16.32 L 10.29 2.48" />
      <path d="M 15.99 12.65 Q 16.31 11.99 6.82 9.18" />
      <path d="M 4.79 14.76 A 2.54 3.59 146 0 1 12.01 21.10" />
      {children}
    </svg>
  );
});

export default ScotoPortfolio;
