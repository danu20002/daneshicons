import React from 'react';

export const iconData = {
  "id": "VicinoCoat",
  "name": "VicinoCoat",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.71 10.90 L 11.71 10.90"
      }
    ],
    [
      "path",
      {
        "d": "M 15.10 8.83 L 13.10 12.30"
      }
    ],
    [
      "path",
      {
        "d": "M 13.19 16.27 L 11.19 12.80"
      }
    ]
  ]
};

export const VicinoCoat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.71 10.90 L 11.71 10.90" />
      <path d="M 15.10 8.83 L 13.10 12.30" />
      <path d="M 13.19 16.27 L 11.19 12.80" />
      {children}
    </svg>
  );
});

export default VicinoCoat;
