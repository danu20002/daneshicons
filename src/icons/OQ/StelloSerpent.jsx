import React from 'react';

export const iconData = {
  "id": "StelloSerpent",
  "name": "StelloSerpent",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.85 5.86 C 9.06 4.24, 16.36 18.45, 17.76 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 4.22 C 11.17 18.55, 13.88 14.01, 18.02 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 2.74 C 14.78 9.44, 17.60 5.81, 15.65 20.84"
      }
    ]
  ]
};

export const StelloSerpent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.85 5.86 C 9.06 4.24, 16.36 18.45, 17.76 19.99" />
      <path d="M 4.45 4.22 C 11.17 18.55, 13.88 14.01, 18.02 18.80" />
      <path d="M 3.13 2.74 C 14.78 9.44, 17.60 5.81, 15.65 20.84" />
      {children}
    </svg>
  );
});

export default StelloSerpent;
