import React from 'react';

export const iconData = {
  "id": "ScleroFloat",
  "name": "ScleroFloat",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 12.34 L 16.39 20.29 L 7.02 19.95 L 2.63 11.66 L 7.61 3.71 L 16.98 4.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 14.86 L 12.25 18.16 L 6.80 15.30 L 6.54 9.14 L 11.75 5.84 L 17.20 8.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.37 14.43 L 11.08 15.26 L 8.71 12.84 L 9.63 9.57 L 12.92 8.74 L 15.29 11.16 Z"
      }
    ]
  ]
};

export const ScleroFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 12.34 L 16.39 20.29 L 7.02 19.95 L 2.63 11.66 L 7.61 3.71 L 16.98 4.05 Z" />
      <path d="M 17.46 14.86 L 12.25 18.16 L 6.80 15.30 L 6.54 9.14 L 11.75 5.84 L 17.20 8.70 Z" />
      <path d="M 14.37 14.43 L 11.08 15.26 L 8.71 12.84 L 9.63 9.57 L 12.92 8.74 L 15.29 11.16 Z" />
      {children}
    </svg>
  );
});

export default ScleroFloat;
