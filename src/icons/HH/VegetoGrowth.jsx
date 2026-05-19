import React from 'react';

export const iconData = {
  "id": "VegetoGrowth",
  "name": "VegetoGrowth",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 12.00 a 4.67 4.67 0 1 0 9.34 0 a 4.67 4.67 0 1 0 -9.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.73 0 a 7.36 7.36 0 1 0 -14.73 0"
      }
    ]
  ]
};

export const VegetoGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0" />
      <path d="M 7.33 12.00 a 4.67 4.67 0 1 0 9.34 0 a 4.67 4.67 0 1 0 -9.34 0" />
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.73 0 a 7.36 7.36 0 1 0 -14.73 0" />
      {children}
    </svg>
  );
});

export default VegetoGrowth;
