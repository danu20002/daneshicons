import React from 'react';

export const iconData = {
  "id": "VersaleTorque",
  "name": "VersaleTorque",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.24 13.96 L 15.25 14.81 L 15.42 21.85 L 11.19 16.22 L 5.18 19.89 L 7.94 13.41 L 1.76 10.04 L 8.75 9.19 L 8.58 2.15 L 12.81 7.78 L 18.82 4.11 L 16.06 10.59 Z"
      }
    ]
  ]
};

export const VersaleTorque = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.24 13.96 L 15.25 14.81 L 15.42 21.85 L 11.19 16.22 L 5.18 19.89 L 7.94 13.41 L 1.76 10.04 L 8.75 9.19 L 8.58 2.15 L 12.81 7.78 L 18.82 4.11 L 16.06 10.59 Z" />
      {children}
    </svg>
  );
});

export default VersaleTorque;
