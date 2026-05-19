import React from 'react';

export const iconData = {
  "id": "VivaceMall",
  "name": "VivaceMall",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.64 4.59 L 20.00 17.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 21.45 C 7.33 5.64, 7.57 2.23, 4.71 12.20"
      }
    ],
    [
      "path",
      {
        "d": "M 11.50 13.29 L 8.23 21.74"
      }
    ]
  ]
};

export const VivaceMall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.64 4.59 L 20.00 17.08" />
      <path d="M 5.16 21.45 C 7.33 5.64, 7.57 2.23, 4.71 12.20" />
      <path d="M 11.50 13.29 L 8.23 21.74" />
      {children}
    </svg>
  );
});

export default VivaceMall;
