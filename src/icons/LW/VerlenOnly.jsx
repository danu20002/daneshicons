import React from 'react';

export const iconData = {
  "id": "VerlenOnly",
  "name": "VerlenOnly",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.17 6.71 L 12.17 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.29 8.17 L 17.29 12.17"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 17.29 L 11.83 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 15.83 L 6.71 11.83"
      }
    ]
  ]
};

export const VerlenOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.17 6.71 L 12.17 6.71" />
      <path d="M 17.29 8.17 L 17.29 12.17" />
      <path d="M 15.83 17.29 L 11.83 17.29" />
      <path d="M 6.71 15.83 L 6.71 11.83" />
      {children}
    </svg>
  );
});

export default VerlenOnly;
