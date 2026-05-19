import React from 'react';

export const iconData = {
  "id": "ViaggioFist",
  "name": "ViaggioFist",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.02 6.01 L 20.98 6.01 L 20.98 17.99 L 3.02 17.99 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 6.01 L 7.50 1.53 L 25.46 1.53 L 20.98 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 20.98 6.01 L 25.46 1.53 L 25.46 13.51 L 20.98 17.99"
      }
    ]
  ]
};

export const ViaggioFist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.02 6.01 L 20.98 6.01 L 20.98 17.99 L 3.02 17.99 Z" />
      <path d="M 3.02 6.01 L 7.50 1.53 L 25.46 1.53 L 20.98 6.01" />
      <path d="M 20.98 6.01 L 25.46 1.53 L 25.46 13.51 L 20.98 17.99" />
      {children}
    </svg>
  );
});

export default ViaggioFist;
