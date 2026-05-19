import React from 'react';

export const iconData = {
  "id": "RegioPrecious",
  "name": "RegioPrecious",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 10.87 L 15.26 10.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.84 10.95 L 14.08 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 12.47 L 10.03 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 11.94 13.35 L 8.70 11.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.70 12.36 L 11.94 8.55"
      }
    ]
  ]
};

export const RegioPrecious = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 10.87 L 15.26 10.87" />
      <path d="M 12.84 10.95 L 14.08 14.75" />
      <path d="M 13.26 12.47 L 10.03 14.83" />
      <path d="M 11.94 13.35 L 8.70 11.00" />
      <path d="M 10.70 12.36 L 11.94 8.55" />
      {children}
    </svg>
  );
});

export default RegioPrecious;
