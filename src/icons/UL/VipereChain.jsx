import React from 'react';

export const iconData = {
  "id": "VipereChain",
  "name": "VipereChain",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 12.00 a 4.81 4.81 0 1 0 9.63 0 a 4.81 4.81 0 1 0 -9.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 12.00 a 7.50 7.50 0 1 0 14.99 0 a 7.50 7.50 0 1 0 -14.99 0"
      }
    ]
  ]
};

export const VipereChain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0" />
      <path d="M 7.19 12.00 a 4.81 4.81 0 1 0 9.63 0 a 4.81 4.81 0 1 0 -9.63 0" />
      <path d="M 4.50 12.00 a 7.50 7.50 0 1 0 14.99 0 a 7.50 7.50 0 1 0 -14.99 0" />
      {children}
    </svg>
  );
});

export default VipereChain;
