import React from 'react';

export const iconData = {
  "id": "TromboSummon",
  "name": "TromboSummon",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 7.11 a 6.53 1.9579680643603203 0 1 0 13.05 0 a 6.53 1.9579680643603203 0 1 0 -13.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 10.37 a 7.99 2.398011345173819 0 1 0 15.99 0 a 7.99 2.398011345173819 0 1 0 -15.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 13.63 a 7.99 2.398011345173819 0 1 0 15.99 0 a 7.99 2.398011345173819 0 1 0 -15.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 16.89 a 6.53 1.95796806436032 0 1 0 13.05 0 a 6.53 1.95796806436032 0 1 0 -13.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 4.93 A 2 2 0 0 0 16.08 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 4.93 A 2 2 0 0 1 16.08 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 4.93 A 2 2 0 0 0 7.92 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 4.93 A 2 2 0 0 1 7.92 19.07"
      }
    ]
  ]
};

export const TromboSummon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0" />
      <path d="M 5.47 7.11 a 6.53 1.9579680643603203 0 1 0 13.05 0 a 6.53 1.9579680643603203 0 1 0 -13.05 0" />
      <path d="M 4.01 10.37 a 7.99 2.398011345173819 0 1 0 15.99 0 a 7.99 2.398011345173819 0 1 0 -15.99 0" />
      <path d="M 4.01 13.63 a 7.99 2.398011345173819 0 1 0 15.99 0 a 7.99 2.398011345173819 0 1 0 -15.99 0" />
      <path d="M 5.47 16.89 a 6.53 1.95796806436032 0 1 0 13.05 0 a 6.53 1.95796806436032 0 1 0 -13.05 0" />
      <path d="M 16.08 4.93 A 2 2 0 0 0 16.08 19.07" />
      <path d="M 16.08 4.93 A 2 2 0 0 1 16.08 19.07" />
      <path d="M 7.92 4.93 A 2 2 0 0 0 7.92 19.07" />
      <path d="M 7.92 4.93 A 2 2 0 0 1 7.92 19.07" />
      {children}
    </svg>
  );
});

export default TromboSummon;
