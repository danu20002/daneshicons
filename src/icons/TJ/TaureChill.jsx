import React from 'react';

export const iconData = {
  "id": "TaureChill",
  "name": "TaureChill",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 9.13 a 8.11 2.43284160567582 0 1 0 16.22 0 a 8.11 2.43284160567582 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 14.87 a 8.11 2.43284160567582 0 1 0 16.22 0 a 8.11 2.43284160567582 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.40 A 2 2 0 0 0 12.00 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.40 A 2 2 0 0 1 12.00 20.60"
      }
    ]
  ]
};

export const TaureChill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0" />
      <path d="M 3.89 9.13 a 8.11 2.43284160567582 0 1 0 16.22 0 a 8.11 2.43284160567582 0 1 0 -16.22 0" />
      <path d="M 3.89 14.87 a 8.11 2.43284160567582 0 1 0 16.22 0 a 8.11 2.43284160567582 0 1 0 -16.22 0" />
      <path d="M 12.00 3.40 A 2 2 0 0 0 12.00 20.60" />
      <path d="M 12.00 3.40 A 2 2 0 0 1 12.00 20.60" />
      {children}
    </svg>
  );
});

export default TaureChill;
