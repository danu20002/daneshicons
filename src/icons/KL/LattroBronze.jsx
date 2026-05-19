import React from 'react';

export const iconData = {
  "id": "LattroBronze",
  "name": "LattroBronze",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.49 20.28 A 6.53 2.94 121 0 1 21.66 11.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 9.90 C 10.52 20.25, 7.35 6.40, 9.09 14.12"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 8.65 Q 3.92 16.06 16.46 3.78"
      }
    ]
  ]
};

export const LattroBronze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.49 20.28 A 6.53 2.94 121 0 1 21.66 11.26" />
      <path d="M 3.50 9.90 C 10.52 20.25, 7.35 6.40, 9.09 14.12" />
      <path d="M 4.53 8.65 Q 3.92 16.06 16.46 3.78" />
      {children}
    </svg>
  );
});

export default LattroBronze;
