import React from 'react';

export const iconData = {
  "id": "ViceCushion",
  "name": "ViceCushion",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 6.20 L 20.46 6.20 L 20.46 17.80 L 3.54 17.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 6.20 L 7.17 2.57 L 24.09 2.57 L 20.46 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 6.20 L 24.09 2.57 L 24.09 14.17 L 20.46 17.80"
      }
    ]
  ]
};

export const ViceCushion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 6.20 L 20.46 6.20 L 20.46 17.80 L 3.54 17.80 Z" />
      <path d="M 3.54 6.20 L 7.17 2.57 L 24.09 2.57 L 20.46 6.20" />
      <path d="M 20.46 6.20 L 24.09 2.57 L 24.09 14.17 L 20.46 17.80" />
      {children}
    </svg>
  );
});

export default ViceCushion;
