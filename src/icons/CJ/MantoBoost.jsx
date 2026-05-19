import React from 'react';

export const iconData = {
  "id": "MantoBoost",
  "name": "MantoBoost",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 12.00 Q 14.13 12.88 17.95 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 17.95 Q 12.88 14.13 12.00 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.42 Q 11.12 14.13 6.05 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 17.95 Q 9.87 12.88 3.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 Q 9.87 11.12 6.05 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 6.05 Q 11.12 9.87 12.00 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.58 Q 12.88 9.87 17.95 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 6.05 Q 14.13 11.12 20.42 12.00"
      }
    ]
  ]
};

export const MantoBoost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 12.00 Q 14.13 12.88 17.95 17.95" />
      <path d="M 17.95 17.95 Q 12.88 14.13 12.00 20.42" />
      <path d="M 12.00 20.42 Q 11.12 14.13 6.05 17.95" />
      <path d="M 6.05 17.95 Q 9.87 12.88 3.58 12.00" />
      <path d="M 3.58 12.00 Q 9.87 11.12 6.05 6.05" />
      <path d="M 6.05 6.05 Q 11.12 9.87 12.00 3.58" />
      <path d="M 12.00 3.58 Q 12.88 9.87 17.95 6.05" />
      <path d="M 17.95 6.05 Q 14.13 11.12 20.42 12.00" />
      {children}
    </svg>
  );
});

export default MantoBoost;
