import React from 'react';

export const iconData = {
  "id": "ModuPick",
  "name": "ModuPick",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 12.00 a 5.09 5.09 0 1 1 10.18 0 a 5.09 5.09 0 1 1 -10.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.71 12.00 L 20.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.36 17.81 L 16.36 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 17.81 L 7.64 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 12.00 L 3.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 6.19 L 7.64 4.46"
      }
    ],
    [
      "path",
      {
        "d": "M 15.36 6.19 L 16.36 4.46"
      }
    ]
  ]
};

export const ModuPick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0" />
      <path d="M 6.91 12.00 a 5.09 5.09 0 1 1 10.18 0 a 5.09 5.09 0 1 1 -10.18 0" />
      <path d="M 18.71 12.00 L 20.71 12.00" />
      <path d="M 15.36 17.81 L 16.36 19.54" />
      <path d="M 8.64 17.81 L 7.64 19.54" />
      <path d="M 5.29 12.00 L 3.29 12.00" />
      <path d="M 8.64 6.19 L 7.64 4.46" />
      <path d="M 15.36 6.19 L 16.36 4.46" />
      {children}
    </svg>
  );
});

export default ModuPick;
