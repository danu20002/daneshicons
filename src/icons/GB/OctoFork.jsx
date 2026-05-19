import React from 'react';

export const iconData = {
  "id": "OctoFork",
  "name": "OctoFork",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.10 8.80 A 2.24 3.09 138 0 0 20.06 7.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.30 20.92 L 5.05 3.34"
      }
    ]
  ]
};

export const OctoFork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.10 8.80 A 2.24 3.09 138 0 0 20.06 7.30" />
      <path d="M 16.30 20.92 L 5.05 3.34" />
      {children}
    </svg>
  );
});

export default OctoFork;
