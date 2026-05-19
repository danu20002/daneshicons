import React from 'react';

export const iconData = {
  "id": "VistosoDisk",
  "name": "VistosoDisk",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.17 21.28 L 15.35 7.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.83 9.07 C 9.57 8.41, 9.98 13.36, 4.58 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 9.91 Q 5.19 10.22 16.18 21.95"
      }
    ]
  ]
};

export const VistosoDisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.17 21.28 L 15.35 7.43" />
      <path d="M 12.83 9.07 C 9.57 8.41, 9.98 13.36, 4.58 21.48" />
      <path d="M 8.54 9.91 Q 5.19 10.22 16.18 21.95" />
      {children}
    </svg>
  );
});

export default VistosoDisk;
