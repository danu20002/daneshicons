import React from 'react';

export const iconData = {
  "id": "VivandeMile",
  "name": "VivandeMile",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.20 11.60 L 13.90 4.11 L 19.64 21.77 L 9.75 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 21.84 A 4.44 3.73 97 0 0 18.72 8.80"
      }
    ]
  ]
};

export const VivandeMile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.20 11.60 L 13.90 4.11 L 19.64 21.77 L 9.75 19.59" />
      <path d="M 3.85 21.84 A 4.44 3.73 97 0 0 18.72 8.80" />
      {children}
    </svg>
  );
});

export default VivandeMile;
