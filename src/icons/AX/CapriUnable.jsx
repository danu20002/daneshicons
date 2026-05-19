import React from 'react';

export const iconData = {
  "id": "CapriUnable",
  "name": "CapriUnable",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.29 10.99 L 12.29 10.99"
      }
    ],
    [
      "path",
      {
        "d": "M 14.73 9.29 L 12.73 12.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.98 15.72 L 10.98 12.26"
      }
    ]
  ]
};

export const CapriUnable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.29 10.99 L 12.29 10.99" />
      <path d="M 14.73 9.29 L 12.73 12.76" />
      <path d="M 12.98 15.72 L 10.98 12.26" />
      {children}
    </svg>
  );
});

export default CapriUnable;
