import React from 'react';

export const iconData = {
  "id": "VelaElite",
  "name": "VelaElite",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 6.54 L 20.21 6.54 L 20.21 17.46 L 3.79 17.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 6.54 L 7.99 2.34 L 24.42 2.34 L 20.21 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 6.54 L 24.42 2.34 L 24.42 13.26 L 20.21 17.46"
      }
    ]
  ]
};

export const VelaElite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 6.54 L 20.21 6.54 L 20.21 17.46 L 3.79 17.46 Z" />
      <path d="M 3.79 6.54 L 7.99 2.34 L 24.42 2.34 L 20.21 6.54" />
      <path d="M 20.21 6.54 L 24.42 2.34 L 24.42 13.26 L 20.21 17.46" />
      {children}
    </svg>
  );
});

export default VelaElite;
