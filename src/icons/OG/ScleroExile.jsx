import React from 'react';

export const iconData = {
  "id": "ScleroExile",
  "name": "ScleroExile",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 9.01 a 8.45 2.533911802800391 0 1 0 16.89 0 a 8.45 2.533911802800391 0 1 0 -16.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 14.99 a 8.45 2.533911802800391 0 1 0 16.89 0 a 8.45 2.533911802800391 0 1 0 -16.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 5.67 A 2 2 0 0 0 18.33 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 5.67 A 2 2 0 0 1 18.33 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.04 A 2 2 0 0 0 12.00 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.04 A 2 2 0 0 1 12.00 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 5.67 A 2 2 0 0 0 5.67 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 5.67 A 2 2 0 0 1 5.67 18.33"
      }
    ]
  ]
};

export const ScleroExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0" />
      <path d="M 3.55 9.01 a 8.45 2.533911802800391 0 1 0 16.89 0 a 8.45 2.533911802800391 0 1 0 -16.89 0" />
      <path d="M 3.55 14.99 a 8.45 2.533911802800391 0 1 0 16.89 0 a 8.45 2.533911802800391 0 1 0 -16.89 0" />
      <path d="M 18.33 5.67 A 2 2 0 0 0 18.33 18.33" />
      <path d="M 18.33 5.67 A 2 2 0 0 1 18.33 18.33" />
      <path d="M 12.00 3.04 A 2 2 0 0 0 12.00 20.96" />
      <path d="M 12.00 3.04 A 2 2 0 0 1 12.00 20.96" />
      <path d="M 5.67 5.67 A 2 2 0 0 0 5.67 18.33" />
      <path d="M 5.67 5.67 A 2 2 0 0 1 5.67 18.33" />
      {children}
    </svg>
  );
});

export default ScleroExile;
