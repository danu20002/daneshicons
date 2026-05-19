import React from 'react';

export const iconData = {
  "id": "ValoreLength",
  "name": "ValoreLength",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.08 8.83 L 13.08 8.83"
      }
    ],
    [
      "path",
      {
        "d": "M 14.11 8.24 L 15.34 12.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 12.84 L 12.99 15.19"
      }
    ],
    [
      "path",
      {
        "d": "M 12.50 16.28 L 9.27 13.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 13.80 L 9.32 10.00"
      }
    ]
  ]
};

export const ValoreLength = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.08 8.83 L 13.08 8.83" />
      <path d="M 14.11 8.24 L 15.34 12.04" />
      <path d="M 16.23 12.84 L 12.99 15.19" />
      <path d="M 12.50 16.28 L 9.27 13.93" />
      <path d="M 8.09 13.80 L 9.32 10.00" />
      {children}
    </svg>
  );
});

export default ValoreLength;
