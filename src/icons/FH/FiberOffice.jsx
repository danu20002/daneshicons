import React from 'react';

export const iconData = {
  "id": "FiberOffice",
  "name": "FiberOffice",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 11.97 L 13.72 11.97"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 10.01 L 12.89 13.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.17 10.05 L 11.17 13.51"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 12.03 L 10.28 12.03"
      }
    ],
    [
      "path",
      {
        "d": "M 13.11 13.99 L 11.11 10.52"
      }
    ],
    [
      "path",
      {
        "d": "M 10.83 13.95 L 12.83 10.49"
      }
    ]
  ]
};

export const FiberOffice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 11.97 L 13.72 11.97" />
      <path d="M 10.89 10.01 L 12.89 13.48" />
      <path d="M 13.17 10.05 L 11.17 13.51" />
      <path d="M 14.28 12.03 L 10.28 12.03" />
      <path d="M 13.11 13.99 L 11.11 10.52" />
      <path d="M 10.83 13.95 L 12.83 10.49" />
      {children}
    </svg>
  );
});

export default FiberOffice;
