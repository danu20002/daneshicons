import React from 'react';

export const iconData = {
  "id": "HaloCheckout",
  "name": "HaloCheckout",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 a 4.40 4.40 0 1 0 8.79 0 a 4.40 4.40 0 1 0 -8.79 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 0 12.05 0 a 6.02 6.02 0 1 0 -12.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 8.35 0 1 0 16.69 0 a 8.35 8.35 0 1 0 -16.69 0"
      }
    ]
  ]
};

export const HaloCheckout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0" />
      <path d="M 7.60 12.00 a 4.40 4.40 0 1 0 8.79 0 a 4.40 4.40 0 1 0 -8.79 0" stroke-dasharray="6 3" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 0 12.05 0 a 6.02 6.02 0 1 0 -12.05 0" />
      <path d="M 3.65 12.00 a 8.35 8.35 0 1 0 16.69 0 a 8.35 8.35 0 1 0 -16.69 0" />
      {children}
    </svg>
  );
});

export default HaloCheckout;
