import React from 'react';

export const iconData = {
  "id": "SphingoTonight",
  "name": "SphingoTonight",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 a 4.28 4.28 0 1 0 8.56 0 a 4.28 4.28 0 1 0 -8.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 12.00 a 6.11 6.11 0 1 0 12.21 0 a 6.11 6.11 0 1 0 -12.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.89 0 a 8.44 8.44 0 1 0 -16.89 0"
      }
    ]
  ]
};

export const SphingoTonight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0" />
      <path d="M 7.72 12.00 a 4.28 4.28 0 1 0 8.56 0 a 4.28 4.28 0 1 0 -8.56 0" />
      <path d="M 5.89 12.00 a 6.11 6.11 0 1 0 12.21 0 a 6.11 6.11 0 1 0 -12.21 0" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.89 0 a 8.44 8.44 0 1 0 -16.89 0" />
      {children}
    </svg>
  );
});

export default SphingoTonight;
