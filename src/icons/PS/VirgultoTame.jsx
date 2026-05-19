import React from 'react';

export const iconData = {
  "id": "VirgultoTame",
  "name": "VirgultoTame",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.94 12.00 a 9.06 9.06 0 1 0 18.13 0 a 9.06 9.06 0 1 0 -18.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 12.00 a 9.06 2.7191814819350837 0 1 0 18.13 0 a 9.06 2.7191814819350837 0 1 0 -18.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 4.15 A 2 2 0 0 0 16.53 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 4.15 A 2 2 0 0 1 16.53 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 4.15 A 2 2 0 0 0 7.47 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 4.15 A 2 2 0 0 1 7.47 19.85"
      }
    ]
  ]
};

export const VirgultoTame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.94 12.00 a 9.06 9.06 0 1 0 18.13 0 a 9.06 9.06 0 1 0 -18.13 0" />
      <path d="M 2.94 12.00 a 9.06 2.7191814819350837 0 1 0 18.13 0 a 9.06 2.7191814819350837 0 1 0 -18.13 0" />
      <path d="M 16.53 4.15 A 2 2 0 0 0 16.53 19.85" />
      <path d="M 16.53 4.15 A 2 2 0 0 1 16.53 19.85" />
      <path d="M 7.47 4.15 A 2 2 0 0 0 7.47 19.85" />
      <path d="M 7.47 4.15 A 2 2 0 0 1 7.47 19.85" />
      {children}
    </svg>
  );
});

export default VirgultoTame;
