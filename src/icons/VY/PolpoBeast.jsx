import React from 'react';

export const iconData = {
  "id": "PolpoBeast",
  "name": "PolpoBeast",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.30 5.15 C 10.70 6.37, 16.42 7.21, 20.52 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 6.38 C 12.87 17.20, 7.38 15.31, 14.52 19.10"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 2.98 C 16.95 7.80, 16.63 6.11, 19.05 14.96"
      }
    ]
  ]
};

export const PolpoBeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.30 5.15 C 10.70 6.37, 16.42 7.21, 20.52 14.50" />
      <path d="M 5.49 6.38 C 12.87 17.20, 7.38 15.31, 14.52 19.10" />
      <path d="M 2.55 2.98 C 16.95 7.80, 16.63 6.11, 19.05 14.96" />
      {children}
    </svg>
  );
});

export default PolpoBeast;
