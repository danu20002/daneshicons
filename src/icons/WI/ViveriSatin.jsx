import React from 'react';

export const iconData = {
  "id": "ViveriSatin",
  "name": "ViveriSatin",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 5.27 L 20.54 5.27 L 20.54 18.73 L 3.46 18.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 5.27 L 7.25 1.47 L 24.34 1.47 L 20.54 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.54 5.27 L 24.34 1.47 L 24.34 14.94 L 20.54 18.73"
      }
    ]
  ]
};

export const ViveriSatin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 5.27 L 20.54 5.27 L 20.54 18.73 L 3.46 18.73 Z" />
      <path d="M 3.46 5.27 L 7.25 1.47 L 24.34 1.47 L 20.54 5.27" />
      <path d="M 20.54 5.27 L 24.34 1.47 L 24.34 14.94 L 20.54 18.73" />
      {children}
    </svg>
  );
});

export default ViveriSatin;
