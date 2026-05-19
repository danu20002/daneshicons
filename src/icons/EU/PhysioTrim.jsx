import React from 'react';

export const iconData = {
  "id": "PhysioTrim",
  "name": "PhysioTrim",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 6.50 L 19.70 6.50 L 19.70 17.50 L 4.30 17.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 6.50 L 9.20 1.60 L 24.61 1.60 L 19.70 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 6.50 L 24.61 1.60 L 24.61 12.60 L 19.70 17.50"
      }
    ]
  ]
};

export const PhysioTrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 6.50 L 19.70 6.50 L 19.70 17.50 L 4.30 17.50 Z" />
      <path d="M 4.30 6.50 L 9.20 1.60 L 24.61 1.60 L 19.70 6.50" />
      <path d="M 19.70 6.50 L 24.61 1.60 L 24.61 12.60 L 19.70 17.50" />
      {children}
    </svg>
  );
});

export default PhysioTrim;
