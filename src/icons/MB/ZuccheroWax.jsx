import React from 'react';

export const iconData = {
  "id": "ZuccheroWax",
  "name": "ZuccheroWax",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 12.00 a 8.50 8.50 0 1 0 16.99 0 a 8.50 8.50 0 1 0 -16.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 9.17 a 8.01 2.4033072641435393 0 1 0 16.02 0 a 8.01 2.4033072641435393 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 14.83 a 8.01 2.4033072641435393 0 1 0 16.02 0 a 8.01 2.4033072641435393 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.50 A 2 2 0 0 0 12.00 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.50 A 2 2 0 0 1 12.00 20.50"
      }
    ]
  ]
};

export const ZuccheroWax = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 12.00 a 8.50 8.50 0 1 0 16.99 0 a 8.50 8.50 0 1 0 -16.99 0" />
      <path d="M 3.99 9.17 a 8.01 2.4033072641435393 0 1 0 16.02 0 a 8.01 2.4033072641435393 0 1 0 -16.02 0" />
      <path d="M 3.99 14.83 a 8.01 2.4033072641435393 0 1 0 16.02 0 a 8.01 2.4033072641435393 0 1 0 -16.02 0" />
      <path d="M 12.00 3.50 A 2 2 0 0 0 12.00 20.50" />
      <path d="M 12.00 3.50 A 2 2 0 0 1 12.00 20.50" />
      {children}
    </svg>
  );
});

export default ZuccheroWax;
