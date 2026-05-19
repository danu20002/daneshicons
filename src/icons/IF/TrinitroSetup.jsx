import React from 'react';

export const iconData = {
  "id": "TrinitroSetup",
  "name": "TrinitroSetup",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.07 9.50 L 10.07 9.50"
      }
    ],
    [
      "path",
      {
        "d": "M 17.13 8.11 L 15.13 11.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.80 18.39 L 10.80 14.92"
      }
    ]
  ]
};

export const TrinitroSetup = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.07 9.50 L 10.07 9.50" />
      <path d="M 17.13 8.11 L 15.13 11.57" />
      <path d="M 12.80 18.39 L 10.80 14.92" />
      {children}
    </svg>
  );
});

export default TrinitroSetup;
