import React from 'react';

export const iconData = {
  "id": "PneumoRide",
  "name": "PneumoRide",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 5.64 L 20.28 5.64 L 20.28 18.36 L 3.72 18.36 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 5.64 L 7.82 1.54 L 24.39 1.54 L 20.28 5.64"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 5.64 L 24.39 1.54 L 24.39 14.25 L 20.28 18.36"
      }
    ]
  ]
};

export const PneumoRide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 5.64 L 20.28 5.64 L 20.28 18.36 L 3.72 18.36 Z" />
      <path d="M 3.72 5.64 L 7.82 1.54 L 24.39 1.54 L 20.28 5.64" />
      <path d="M 20.28 5.64 L 24.39 1.54 L 24.39 14.25 L 20.28 18.36" />
      {children}
    </svg>
  );
});

export default PneumoRide;
