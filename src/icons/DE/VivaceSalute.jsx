import React from 'react';

export const iconData = {
  "id": "VivaceSalute",
  "name": "VivaceSalute",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.87 12.00 L 17.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 L 10.72 9.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 L 10.72 14.32"
      }
    ]
  ]
};

export const VivaceSalute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.87 12.00 L 17.13 12.00" />
      <path d="M 6.87 12.00 L 10.72 9.68" />
      <path d="M 6.87 12.00 L 10.72 14.32" />
      {children}
    </svg>
  );
});

export default VivaceSalute;
