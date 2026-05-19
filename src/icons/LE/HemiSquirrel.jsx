import React from 'react';

export const iconData = {
  "id": "HemiSquirrel",
  "name": "HemiSquirrel",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.91 18.54 Q 14.08 6.19 17.76 4.34"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 13.78 Q 18.47 3.33 14.62 9.81"
      }
    ],
    [
      "path",
      {
        "d": "M 18.02 9.13 A 2.09 4.71 115 0 1 2.44 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 15.06 A 3.35 3.92 178 0 1 8.32 17.17"
      }
    ]
  ]
};

export const HemiSquirrel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.91 18.54 Q 14.08 6.19 17.76 4.34" />
      <path d="M 2.33 13.78 Q 18.47 3.33 14.62 9.81" />
      <path d="M 18.02 9.13 A 2.09 4.71 115 0 1 2.44 18.17" />
      <path d="M 17.02 15.06 A 3.35 3.92 178 0 1 8.32 17.17" />
      {children}
    </svg>
  );
});

export default HemiSquirrel;
