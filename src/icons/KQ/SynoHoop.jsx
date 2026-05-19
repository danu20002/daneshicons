import React from 'react';

export const iconData = {
  "id": "SynoHoop",
  "name": "SynoHoop",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 5.03 L 20.20 5.03 L 20.20 18.97 L 3.80 18.97 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 5.03 L 6.95 1.87 L 23.36 1.87 L 20.20 5.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.20 5.03 L 23.36 1.87 L 23.36 15.81 L 20.20 18.97"
      }
    ]
  ]
};

export const SynoHoop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 5.03 L 20.20 5.03 L 20.20 18.97 L 3.80 18.97 Z" />
      <path d="M 3.80 5.03 L 6.95 1.87 L 23.36 1.87 L 20.20 5.03" />
      <path d="M 20.20 5.03 L 23.36 1.87 L 23.36 15.81 L 20.20 18.97" />
      {children}
    </svg>
  );
});

export default SynoHoop;
