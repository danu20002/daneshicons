import React from 'react';

export const iconData = {
  "id": "SimulGreat",
  "name": "SimulGreat",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 4.59 L 2.89 5.67 L 1.51 3.94 L 1.00 2.55 L 1.00 1.00 L 1.00 2.11 L 1.96 1.00 L 1.00 1.00 L 1.00 1.88 L 1.00 2.45 L 1.00 2.63 L 1.97 1.00 L 3.72 1.65 L 5.71 4.55 L 5.53 3.83 L 2.71 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 14.17 L 7.60 11.79 L 7.27 9.70 L 5.88 7.25 L 3.13 9.28 L 2.53 8.33 L 1.00 9.52 L 1.58 6.90 L 1.00 6.77 L 1.00 4.86 L 1.44 3.17 L 1.55 2.96 L 1.00 1.53 L 1.38 1.89 L 1.00 3.39 L 1.00 6.03 L 3.52 7.10 L 1.95 7.99 L 3.86 9.34"
      }
    ]
  ]
};

export const SimulGreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 4.59 L 2.89 5.67 L 1.51 3.94 L 1.00 2.55 L 1.00 1.00 L 1.00 2.11 L 1.96 1.00 L 1.00 1.00 L 1.00 1.88 L 1.00 2.45 L 1.00 2.63 L 1.97 1.00 L 3.72 1.65 L 5.71 4.55 L 5.53 3.83 L 2.71 5.54" />
      <path d="M 5.38 14.17 L 7.60 11.79 L 7.27 9.70 L 5.88 7.25 L 3.13 9.28 L 2.53 8.33 L 1.00 9.52 L 1.58 6.90 L 1.00 6.77 L 1.00 4.86 L 1.44 3.17 L 1.55 2.96 L 1.00 1.53 L 1.38 1.89 L 1.00 3.39 L 1.00 6.03 L 3.52 7.10 L 1.95 7.99 L 3.86 9.34" />
      {children}
    </svg>
  );
});

export default SimulGreat;
