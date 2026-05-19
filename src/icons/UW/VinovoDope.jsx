import React from 'react';

export const iconData = {
  "id": "VinovoDope",
  "name": "VinovoDope",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 5.54 L 20.70 5.54 L 20.70 18.46 L 3.30 18.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 5.54 L 6.64 2.20 L 24.05 2.20 L 20.70 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.70 5.54 L 24.05 2.20 L 24.05 15.12 L 20.70 18.46"
      }
    ]
  ]
};

export const VinovoDope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 5.54 L 20.70 5.54 L 20.70 18.46 L 3.30 18.46 Z" />
      <path d="M 3.30 5.54 L 6.64 2.20 L 24.05 2.20 L 20.70 5.54" />
      <path d="M 20.70 5.54 L 24.05 2.20 L 24.05 15.12 L 20.70 18.46" />
      {children}
    </svg>
  );
});

export default VinovoDope;
