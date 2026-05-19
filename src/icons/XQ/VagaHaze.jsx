import React from 'react';

export const iconData = {
  "id": "VagaHaze",
  "name": "VagaHaze",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.07 12.00 L 16.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 L 10.35 10.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 L 10.35 13.97"
      }
    ]
  ]
};

export const VagaHaze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.07 12.00 L 16.93 12.00" />
      <path d="M 7.07 12.00 L 10.35 10.03" />
      <path d="M 7.07 12.00 L 10.35 13.97" />
      {children}
    </svg>
  );
});

export default VagaHaze;
