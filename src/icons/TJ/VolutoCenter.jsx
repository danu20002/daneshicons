import React from 'react';

export const iconData = {
  "id": "VolutoCenter",
  "name": "VolutoCenter",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.55 0 a 8.27 8.27 0 1 0 -16.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 2.4819037242326885 0 1 0 16.55 0 a 8.27 2.4819037242326885 0 1 0 -16.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 A 2 2 0 0 0 12.00 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 A 2 2 0 0 1 12.00 20.27"
      }
    ]
  ]
};

export const VolutoCenter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.55 0 a 8.27 8.27 0 1 0 -16.55 0" />
      <path d="M 3.73 12.00 a 8.27 2.4819037242326885 0 1 0 16.55 0 a 8.27 2.4819037242326885 0 1 0 -16.55 0" />
      <path d="M 12.00 3.73 A 2 2 0 0 0 12.00 20.27" />
      <path d="M 12.00 3.73 A 2 2 0 0 1 12.00 20.27" />
      {children}
    </svg>
  );
});

export default VolutoCenter;
