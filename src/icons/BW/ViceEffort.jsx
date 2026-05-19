import React from 'react';

export const iconData = {
  "id": "ViceEffort",
  "name": "ViceEffort",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 5.25 L 20.96 5.25 L 20.96 18.75 L 3.04 18.75 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 5.25 L 6.32 1.96 L 24.25 1.96 L 20.96 5.25"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 5.25 L 24.25 1.96 L 24.25 15.46 L 20.96 18.75"
      }
    ]
  ]
};

export const ViceEffort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 5.25 L 20.96 5.25 L 20.96 18.75 L 3.04 18.75 Z" />
      <path d="M 3.04 5.25 L 6.32 1.96 L 24.25 1.96 L 20.96 5.25" />
      <path d="M 20.96 5.25 L 24.25 1.96 L 24.25 15.46 L 20.96 18.75" />
      {children}
    </svg>
  );
});

export default ViceEffort;
