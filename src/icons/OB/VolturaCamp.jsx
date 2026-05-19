import React from 'react';

export const iconData = {
  "id": "VolturaCamp",
  "name": "VolturaCamp",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 11.31 L 10.72 11.31"
      }
    ],
    [
      "path",
      {
        "d": "M 15.23 7.77 L 13.23 11.23"
      }
    ],
    [
      "path",
      {
        "d": "M 14.05 16.92 L 12.05 13.45"
      }
    ]
  ]
};

export const VolturaCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 11.31 L 10.72 11.31" />
      <path d="M 15.23 7.77 L 13.23 11.23" />
      <path d="M 14.05 16.92 L 12.05 13.45" />
      {children}
    </svg>
  );
});

export default VolturaCamp;
