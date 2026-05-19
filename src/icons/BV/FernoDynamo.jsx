import React from 'react';

export const iconData = {
  "id": "FernoDynamo",
  "name": "FernoDynamo",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 8.85 0 1 0 17.69 0 a 8.85 8.85 0 1 0 -17.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 2.6539396624546496 0 1 0 17.69 0 a 8.85 2.6539396624546496 0 1 0 -17.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 5.74 A 2 2 0 0 0 18.26 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 5.74 A 2 2 0 0 1 18.26 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.15 A 2 2 0 0 0 12.00 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.15 A 2 2 0 0 1 12.00 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 5.74 A 2 2 0 0 0 5.74 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 5.74 A 2 2 0 0 1 5.74 18.26"
      }
    ]
  ]
};

export const FernoDynamo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 12.00 a 8.85 8.85 0 1 0 17.69 0 a 8.85 8.85 0 1 0 -17.69 0" />
      <path d="M 3.15 12.00 a 8.85 2.6539396624546496 0 1 0 17.69 0 a 8.85 2.6539396624546496 0 1 0 -17.69 0" />
      <path d="M 18.26 5.74 A 2 2 0 0 0 18.26 18.26" />
      <path d="M 18.26 5.74 A 2 2 0 0 1 18.26 18.26" />
      <path d="M 12.00 3.15 A 2 2 0 0 0 12.00 20.85" />
      <path d="M 12.00 3.15 A 2 2 0 0 1 12.00 20.85" />
      <path d="M 5.74 5.74 A 2 2 0 0 0 5.74 18.26" />
      <path d="M 5.74 5.74 A 2 2 0 0 1 5.74 18.26" />
      {children}
    </svg>
  );
});

export default FernoDynamo;
