import React from 'react';

export const iconData = {
  "id": "VerduraForever",
  "name": "VerduraForever",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.55 9.93 L 12.95 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 19.64 C 8.71 9.88, 12.71 5.13, 21.79 17.51"
      }
    ],
    [
      "path",
      {
        "d": "M 21.89 18.41 C 2.42 14.02, 8.88 4.95, 16.23 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 6.63 A 6.81 5.74 81 0 0 2.77 6.30"
      }
    ]
  ]
};

export const VerduraForever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.55 9.93 L 12.95 12.77" />
      <path d="M 7.58 19.64 C 8.71 9.88, 12.71 5.13, 21.79 17.51" />
      <path d="M 21.89 18.41 C 2.42 14.02, 8.88 4.95, 16.23 21.78" />
      <path d="M 2.50 6.63 A 6.81 5.74 81 0 0 2.77 6.30" />
      {children}
    </svg>
  );
});

export default VerduraForever;
