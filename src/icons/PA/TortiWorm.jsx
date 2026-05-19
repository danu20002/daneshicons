import React from 'react';

export const iconData = {
  "id": "TortiWorm",
  "name": "TortiWorm",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 6.10 L 19.96 6.10 L 19.96 17.90 L 4.04 17.90 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 6.10 L 8.70 1.45 L 24.61 1.45 L 19.96 6.10"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 6.10 L 24.61 1.45 L 24.61 13.24 L 19.96 17.90"
      }
    ]
  ]
};

export const TortiWorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 6.10 L 19.96 6.10 L 19.96 17.90 L 4.04 17.90 Z" />
      <path d="M 4.04 6.10 L 8.70 1.45 L 24.61 1.45 L 19.96 6.10" />
      <path d="M 19.96 6.10 L 24.61 1.45 L 24.61 13.24 L 19.96 17.90" />
      {children}
    </svg>
  );
});

export default TortiWorm;
