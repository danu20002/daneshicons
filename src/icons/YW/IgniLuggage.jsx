import React from 'react';

export const iconData = {
  "id": "IgniLuggage",
  "name": "IgniLuggage",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 8.61 C 11.50 15.00, 15.01 12.62, 18.52 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 2.91 C 5.10 10.14, 15.98 15.99, 20.29 14.56"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 2.16 C 8.44 6.31, 13.71 8.73, 14.61 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 4.35 C 18.62 16.14, 6.59 6.29, 16.85 20.06"
      }
    ]
  ]
};

export const IgniLuggage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 8.61 C 11.50 15.00, 15.01 12.62, 18.52 17.31" />
      <path d="M 5.70 2.91 C 5.10 10.14, 15.98 15.99, 20.29 14.56" />
      <path d="M 2.35 2.16 C 8.44 6.31, 13.71 8.73, 14.61 17.86" />
      <path d="M 3.33 4.35 C 18.62 16.14, 6.59 6.29, 16.85 20.06" />
      {children}
    </svg>
  );
});

export default IgniLuggage;
