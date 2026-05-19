import React from 'react';

export const iconData = {
  "id": "SolidoHunt",
  "name": "SolidoHunt",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 5.33 L 20.21 5.33 L 20.21 18.67 L 3.79 18.67 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 5.33 L 7.55 1.58 L 23.96 1.58 L 20.21 5.33"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 5.33 L 23.96 1.58 L 23.96 14.91 L 20.21 18.67"
      }
    ]
  ]
};

export const SolidoHunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 5.33 L 20.21 5.33 L 20.21 18.67 L 3.79 18.67 Z" />
      <path d="M 3.79 5.33 L 7.55 1.58 L 23.96 1.58 L 20.21 5.33" />
      <path d="M 20.21 5.33 L 23.96 1.58 L 23.96 14.91 L 20.21 18.67" />
      {children}
    </svg>
  );
});

export default SolidoHunt;
