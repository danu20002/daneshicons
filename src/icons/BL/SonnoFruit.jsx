import React from 'react';

export const iconData = {
  "id": "SonnoFruit",
  "name": "SonnoFruit",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 12.00 a 3.61 3.61 0 1 0 7.22 0 a 3.61 3.61 0 1 0 -7.22 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 12.00 a 5.46 5.46 0 1 0 10.92 0 a 5.46 5.46 0 1 0 -10.92 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.17 0 a 8.58 8.58 0 1 0 -17.17 0"
      }
    ]
  ]
};

export const SonnoFruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0" stroke-dasharray="4 1" />
      <path d="M 8.39 12.00 a 3.61 3.61 0 1 0 7.22 0 a 3.61 3.61 0 1 0 -7.22 0" stroke-dasharray="3 1" />
      <path d="M 6.54 12.00 a 5.46 5.46 0 1 0 10.92 0 a 5.46 5.46 0 1 0 -10.92 0" stroke-dasharray="6 3" />
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0" />
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.17 0 a 8.58 8.58 0 1 0 -17.17 0" />
      {children}
    </svg>
  );
});

export default SonnoFruit;
