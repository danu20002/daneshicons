import React from 'react';

export const iconData = {
  "id": "LacunoVictor",
  "name": "LacunoVictor",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.94 12.00 a 9.06 9.06 0 1 0 18.11 0 a 9.06 9.06 0 1 0 -18.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 6.57 a 7.25 2.1735717514157296 0 1 0 14.49 0 a 7.25 2.1735717514157296 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 10.19 a 8.87 2.6620708551480488 0 1 0 17.75 0 a 8.87 2.6620708551480488 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 13.81 a 8.87 2.6620708551480488 0 1 0 17.75 0 a 8.87 2.6620708551480488 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 17.43 a 7.25 2.173571751415729 0 1 0 14.49 0 a 7.25 2.173571751415729 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 4.16 A 2 2 0 0 0 16.53 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 4.16 A 2 2 0 0 1 16.53 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 4.16 A 2 2 0 0 0 7.47 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 4.16 A 2 2 0 0 1 7.47 19.84"
      }
    ]
  ]
};

export const LacunoVictor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.94 12.00 a 9.06 9.06 0 1 0 18.11 0 a 9.06 9.06 0 1 0 -18.11 0" />
      <path d="M 4.75 6.57 a 7.25 2.1735717514157296 0 1 0 14.49 0 a 7.25 2.1735717514157296 0 1 0 -14.49 0" />
      <path d="M 3.13 10.19 a 8.87 2.6620708551480488 0 1 0 17.75 0 a 8.87 2.6620708551480488 0 1 0 -17.75 0" />
      <path d="M 3.13 13.81 a 8.87 2.6620708551480488 0 1 0 17.75 0 a 8.87 2.6620708551480488 0 1 0 -17.75 0" />
      <path d="M 4.75 17.43 a 7.25 2.173571751415729 0 1 0 14.49 0 a 7.25 2.173571751415729 0 1 0 -14.49 0" />
      <path d="M 16.53 4.16 A 2 2 0 0 0 16.53 19.84" />
      <path d="M 16.53 4.16 A 2 2 0 0 1 16.53 19.84" />
      <path d="M 7.47 4.16 A 2 2 0 0 0 7.47 19.84" />
      <path d="M 7.47 4.16 A 2 2 0 0 1 7.47 19.84" />
      {children}
    </svg>
  );
});

export default LacunoVictor;
