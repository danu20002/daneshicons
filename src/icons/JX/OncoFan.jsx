import React from 'react';

export const iconData = {
  "id": "OncoFan",
  "name": "OncoFan",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 6.59 L 19.89 6.59 L 19.89 17.41 L 4.11 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 6.59 L 9.00 1.69 L 24.78 1.69 L 19.89 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 6.59 L 24.78 1.69 L 24.78 12.52 L 19.89 17.41"
      }
    ]
  ]
};

export const OncoFan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 6.59 L 19.89 6.59 L 19.89 17.41 L 4.11 17.41 Z" />
      <path d="M 4.11 6.59 L 9.00 1.69 L 24.78 1.69 L 19.89 6.59" />
      <path d="M 19.89 6.59 L 24.78 1.69 L 24.78 12.52 L 19.89 17.41" />
      {children}
    </svg>
  );
});

export default OncoFan;
