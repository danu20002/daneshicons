import React from 'react';

export const iconData = {
  "id": "UrbanoMill",
  "name": "UrbanoMill",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 6.64 L 19.22 6.64 L 19.22 17.36 L 4.78 17.36 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 6.64 L 8.17 3.25 L 22.61 3.25 L 19.22 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 6.64 L 22.61 3.25 L 22.61 13.97 L 19.22 17.36"
      }
    ]
  ]
};

export const UrbanoMill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 6.64 L 19.22 6.64 L 19.22 17.36 L 4.78 17.36 Z" />
      <path d="M 4.78 6.64 L 8.17 3.25 L 22.61 3.25 L 19.22 6.64" />
      <path d="M 19.22 6.64 L 22.61 3.25 L 22.61 13.97 L 19.22 17.36" />
      {children}
    </svg>
  );
});

export default UrbanoMill;
