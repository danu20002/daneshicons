import React from 'react';

export const iconData = {
  "id": "VitelloHead",
  "name": "VitelloHead",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 12.00 a 5.10 5.10 0 1 0 10.20 0 a 5.10 5.10 0 1 0 -10.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 12.00 a 7.80 7.80 0 1 0 15.60 0 a 7.80 7.80 0 1 0 -15.60 0"
      }
    ]
  ]
};

export const VitelloHead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0" />
      <path d="M 6.90 12.00 a 5.10 5.10 0 1 0 10.20 0 a 5.10 5.10 0 1 0 -10.20 0" />
      <path d="M 4.20 12.00 a 7.80 7.80 0 1 0 15.60 0 a 7.80 7.80 0 1 0 -15.60 0" />
      {children}
    </svg>
  );
});

export default VitelloHead;
