import React from 'react';

export const iconData = {
  "id": "OcciStatic",
  "name": "OcciStatic",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 5.26 L 20.59 5.26 L 20.59 18.74 L 3.41 18.74 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 5.26 L 6.83 1.84 L 24.00 1.84 L 20.59 5.26"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 5.26 L 24.00 1.84 L 24.00 15.33 L 20.59 18.74"
      }
    ]
  ]
};

export const OcciStatic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 5.26 L 20.59 5.26 L 20.59 18.74 L 3.41 18.74 Z" />
      <path d="M 3.41 5.26 L 6.83 1.84 L 24.00 1.84 L 20.59 5.26" />
      <path d="M 20.59 5.26 L 24.00 1.84 L 24.00 15.33 L 20.59 18.74" />
      {children}
    </svg>
  );
});

export default OcciStatic;
