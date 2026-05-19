import React from 'react';

export const iconData = {
  "id": "XerofiloPinch",
  "name": "XerofiloPinch",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.54 12.00 L 16.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 12.00 L 10.74 10.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 12.00 L 10.74 13.92"
      }
    ]
  ]
};

export const XerofiloPinch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.54 12.00 L 16.46 12.00" />
      <path d="M 7.54 12.00 L 10.74 10.08" />
      <path d="M 7.54 12.00 L 10.74 13.92" />
      {children}
    </svg>
  );
});

export default XerofiloPinch;
