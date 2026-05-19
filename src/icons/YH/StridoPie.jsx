import React from 'react';

export const iconData = {
  "id": "StridoPie",
  "name": "StridoPie",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 11.23 L 13.60 11.23"
      }
    ],
    [
      "path",
      {
        "d": "M 11.46 9.54 L 13.46 13.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.87 10.30 L 11.87 13.77"
      }
    ],
    [
      "path",
      {
        "d": "M 14.40 12.77 L 10.40 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.54 14.46 L 10.54 11.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 13.70 L 12.13 10.23"
      }
    ]
  ]
};

export const StridoPie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 11.23 L 13.60 11.23" />
      <path d="M 11.46 9.54 L 13.46 13.00" />
      <path d="M 13.87 10.30 L 11.87 13.77" />
      <path d="M 14.40 12.77 L 10.40 12.77" />
      <path d="M 12.54 14.46 L 10.54 11.00" />
      <path d="M 10.13 13.70 L 12.13 10.23" />
      {children}
    </svg>
  );
});

export default StridoPie;
