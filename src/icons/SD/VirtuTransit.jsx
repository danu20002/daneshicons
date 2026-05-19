import React from 'react';

export const iconData = {
  "id": "VirtuTransit",
  "name": "VirtuTransit",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.21 1.51 L 14.05 6.78 L 19.71 4.84 L 17.36 10.35 L 22.40 13.56 L 16.63 15.16 L 17.26 21.11 L 12.42 17.59 L 8.16 21.79 L 7.89 15.81 L 1.95 15.10 L 6.46 11.17 L 3.31 6.08 L 9.20 7.15 Z"
      }
    ]
  ]
};

export const VirtuTransit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.21 1.51 L 14.05 6.78 L 19.71 4.84 L 17.36 10.35 L 22.40 13.56 L 16.63 15.16 L 17.26 21.11 L 12.42 17.59 L 8.16 21.79 L 7.89 15.81 L 1.95 15.10 L 6.46 11.17 L 3.31 6.08 L 9.20 7.15 Z" />
      {children}
    </svg>
  );
});

export default VirtuTransit;
