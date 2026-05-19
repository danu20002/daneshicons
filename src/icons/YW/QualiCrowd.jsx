import React from 'react';

export const iconData = {
  "id": "QualiCrowd",
  "name": "QualiCrowd",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.99 2.55 C 9.99 19.21, 4.66 6.67, 20.05 17.17"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 2.04 C 5.03 19.03, 5.00 16.43, 21.90 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 3.64 C 9.88 8.09, 7.87 19.01, 16.37 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 2.08 5.80 C 18.27 5.36, 15.14 8.97, 20.52 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 9.39 C 16.34 14.35, 4.00 8.35, 17.27 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 2.27 C 8.91 10.12, 5.79 6.60, 19.72 20.93"
      }
    ]
  ]
};

export const QualiCrowd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.99 2.55 C 9.99 19.21, 4.66 6.67, 20.05 17.17" />
      <path d="M 2.69 2.04 C 5.03 19.03, 5.00 16.43, 21.90 15.48" />
      <path d="M 3.53 3.64 C 9.88 8.09, 7.87 19.01, 16.37 19.06" />
      <path d="M 2.08 5.80 C 18.27 5.36, 15.14 8.97, 20.52 20.40" />
      <path d="M 8.10 9.39 C 16.34 14.35, 4.00 8.35, 17.27 17.01" />
      <path d="M 4.50 2.27 C 8.91 10.12, 5.79 6.60, 19.72 20.93" />
      {children}
    </svg>
  );
});

export default QualiCrowd;
