import React from 'react';

export const iconData = {
  "id": "CataMuzzle",
  "name": "CataMuzzle",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 12.00 L 19.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.15 L 12.00 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 6.50 L 17.50 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 17.50 L 17.50 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 12.00 a 9.50 9.50 0 1 0 19.00 0 a 9.50 9.50 0 1 0 -19.00 0"
      }
    ]
  ]
};

export const CataMuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 12.00 L 19.85 12.00" />
      <path d="M 12.00 4.15 L 12.00 19.85" />
      <path d="M 6.50 6.50 L 17.50 17.50" />
      <path d="M 6.50 17.50 L 17.50 6.50" />
      <path d="M 2.50 12.00 a 9.50 9.50 0 1 0 19.00 0 a 9.50 9.50 0 1 0 -19.00 0" />
      {children}
    </svg>
  );
});

export default CataMuzzle;
