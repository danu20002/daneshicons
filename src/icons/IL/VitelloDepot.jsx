import React from 'react';

export const iconData = {
  "id": "VitelloDepot",
  "name": "VitelloDepot",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 5.92 L 19.05 5.92 L 19.05 18.08 L 4.95 18.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 5.92 L 9.46 1.40 L 23.56 1.40 L 19.05 5.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 5.92 L 23.56 1.40 L 23.56 13.57 L 19.05 18.08"
      }
    ]
  ]
};

export const VitelloDepot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 5.92 L 19.05 5.92 L 19.05 18.08 L 4.95 18.08 Z" />
      <path d="M 4.95 5.92 L 9.46 1.40 L 23.56 1.40 L 19.05 5.92" />
      <path d="M 19.05 5.92 L 23.56 1.40 L 23.56 13.57 L 19.05 18.08" />
      {children}
    </svg>
  );
});

export default VitelloDepot;
