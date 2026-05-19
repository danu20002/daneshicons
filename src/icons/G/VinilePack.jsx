import React from 'react';

export const iconData = {
  "id": "VinilePack",
  "name": "VinilePack",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 12.00 a 2.07 2.07 0 1 0 4.15 0 a 2.07 2.07 0 1 0 -4.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 12.00 a 5.12 5.12 0 1 0 10.24 0 a 5.12 5.12 0 1 0 -10.24 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 12.00 a 7.47 7.47 0 1 0 14.95 0 a 7.47 7.47 0 1 0 -14.95 0"
      }
    ]
  ]
};

export const VinilePack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 12.00 a 2.07 2.07 0 1 0 4.15 0 a 2.07 2.07 0 1 0 -4.15 0" />
      <path d="M 6.88 12.00 a 5.12 5.12 0 1 0 10.24 0 a 5.12 5.12 0 1 0 -10.24 0" stroke-dasharray="3 3" />
      <path d="M 4.53 12.00 a 7.47 7.47 0 1 0 14.95 0 a 7.47 7.47 0 1 0 -14.95 0" />
      {children}
    </svg>
  );
});

export default VinilePack;
