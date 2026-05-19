import React from 'react';

export const iconData = {
  "id": "TriploCell",
  "name": "TriploCell",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.74 12.00 L 18.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.74 L 12.00 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 1.65 12.00 a 10.35 10.35 0 1 0 20.70 0 a 10.35 10.35 0 1 0 -20.70 0"
      }
    ]
  ]
};

export const TriploCell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.74 12.00 L 18.26 12.00" />
      <path d="M 12.00 5.74 L 12.00 18.26" />
      <path d="M 1.65 12.00 a 10.35 10.35 0 1 0 20.70 0 a 10.35 10.35 0 1 0 -20.70 0" />
      {children}
    </svg>
  );
});

export default TriploCell;
