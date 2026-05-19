import React from 'react';

export const iconData = {
  "id": "ReactoClasp",
  "name": "ReactoClasp",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 7.57 a 7.67 2.2998222829087647 0 1 0 15.33 0 a 7.67 2.2998222829087647 0 1 0 -15.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 2.65560602825135 0 1 0 17.70 0 a 8.85 2.65560602825135 0 1 0 -17.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 16.43 a 7.67 2.2998222829087647 0 1 0 15.33 0 a 7.67 2.2998222829087647 0 1 0 -15.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 4.33 A 2 2 0 0 0 16.43 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 4.33 A 2 2 0 0 1 16.43 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 4.33 A 2 2 0 0 0 7.57 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 4.33 A 2 2 0 0 1 7.57 19.67"
      }
    ]
  ]
};

export const ReactoClasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0" />
      <path d="M 4.33 7.57 a 7.67 2.2998222829087647 0 1 0 15.33 0 a 7.67 2.2998222829087647 0 1 0 -15.33 0" />
      <path d="M 3.15 12.00 a 8.85 2.65560602825135 0 1 0 17.70 0 a 8.85 2.65560602825135 0 1 0 -17.70 0" />
      <path d="M 4.33 16.43 a 7.67 2.2998222829087647 0 1 0 15.33 0 a 7.67 2.2998222829087647 0 1 0 -15.33 0" />
      <path d="M 16.43 4.33 A 2 2 0 0 0 16.43 19.67" />
      <path d="M 16.43 4.33 A 2 2 0 0 1 16.43 19.67" />
      <path d="M 7.57 4.33 A 2 2 0 0 0 7.57 19.67" />
      <path d="M 7.57 4.33 A 2 2 0 0 1 7.57 19.67" />
      {children}
    </svg>
  );
});

export default ReactoClasp;
