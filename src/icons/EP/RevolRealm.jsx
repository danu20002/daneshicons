import React from 'react';

export const iconData = {
  "id": "RevolRealm",
  "name": "RevolRealm",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.68 3.82 C 21.94 11.97, 17.11 17.73, 7.28 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 11.24 C 11.30 16.10, 12.90 21.68, 2.63 12.34"
      }
    ],
    [
      "path",
      {
        "d": "M 11.35 18.17 L 6.37 17.81 L 16.55 8.74 L 13.90 12.75 L 12.48 5.01 L 4.44 3.73 L 18.93 3.34 L 17.27 12.26"
      }
    ]
  ]
};

export const RevolRealm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.68 3.82 C 21.94 11.97, 17.11 17.73, 7.28 18.20" />
      <path d="M 5.94 11.24 C 11.30 16.10, 12.90 21.68, 2.63 12.34" />
      <path d="M 11.35 18.17 L 6.37 17.81 L 16.55 8.74 L 13.90 12.75 L 12.48 5.01 L 4.44 3.73 L 18.93 3.34 L 17.27 12.26" />
      {children}
    </svg>
  );
});

export default RevolRealm;
