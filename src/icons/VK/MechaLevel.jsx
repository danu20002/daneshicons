import React from 'react';

export const iconData = {
  "id": "MechaLevel",
  "name": "MechaLevel",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.63 11.50 A 5.54 3.47 55 0 1 3.75 8.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 2.40 A 4.75 6.00 29 0 0 20.13 10.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 19.84 A 6.62 5.17 18 0 0 9.92 15.67"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 6.19 L 20.58 13.00"
      }
    ]
  ]
};

export const MechaLevel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.63 11.50 A 5.54 3.47 55 0 1 3.75 8.20" />
      <path d="M 8.92 2.40 A 4.75 6.00 29 0 0 20.13 10.58" />
      <path d="M 5.70 19.84 A 6.62 5.17 18 0 0 9.92 15.67" />
      <path d="M 11.06 6.19 L 20.58 13.00" />
      {children}
    </svg>
  );
});

export default MechaLevel;
