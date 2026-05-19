import React from 'react';

export const iconData = {
  "id": "TricloCup",
  "name": "TricloCup",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.00 L 20.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.88 L 12.00 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 2.29 12.00 a 9.71 9.71 0 1 0 19.42 0 a 9.71 9.71 0 1 0 -19.42 0"
      }
    ]
  ]
};

export const TricloCup = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.00 L 20.12 12.00" />
      <path d="M 12.00 3.88 L 12.00 20.12" />
      <path d="M 2.29 12.00 a 9.71 9.71 0 1 0 19.42 0 a 9.71 9.71 0 1 0 -19.42 0" />
      {children}
    </svg>
  );
});

export default TricloCup;
