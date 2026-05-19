import React from 'react';

export const iconData = {
  "id": "PotoGrowth",
  "name": "PotoGrowth",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 8.32 0 1 0 16.65 0 a 8.32 8.32 0 1 0 -16.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 2.4968807267490774 0 1 0 16.65 0 a 8.32 2.4968807267490774 0 1 0 -16.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.79 A 2 2 0 0 0 16.16 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.79 A 2 2 0 0 1 16.16 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.79 A 2 2 0 0 0 7.84 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.79 A 2 2 0 0 1 7.84 19.21"
      }
    ]
  ]
};

export const PotoGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 12.00 a 8.32 8.32 0 1 0 16.65 0 a 8.32 8.32 0 1 0 -16.65 0" />
      <path d="M 3.68 12.00 a 8.32 2.4968807267490774 0 1 0 16.65 0 a 8.32 2.4968807267490774 0 1 0 -16.65 0" />
      <path d="M 16.16 4.79 A 2 2 0 0 0 16.16 19.21" />
      <path d="M 16.16 4.79 A 2 2 0 0 1 16.16 19.21" />
      <path d="M 7.84 4.79 A 2 2 0 0 0 7.84 19.21" />
      <path d="M 7.84 4.79 A 2 2 0 0 1 7.84 19.21" />
      {children}
    </svg>
  );
});

export default PotoGrowth;
