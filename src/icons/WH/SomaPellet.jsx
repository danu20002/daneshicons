import React from 'react';

export const iconData = {
  "id": "SomaPellet",
  "name": "SomaPellet",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 12.00 a 8.91 8.91 0 1 0 17.83 0 a 8.91 8.91 0 1 0 -17.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 7.54 a 7.72 2.315756257076015 0 1 0 15.44 0 a 7.72 2.315756257076015 0 1 0 -15.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 12.00 a 8.91 2.6740049968007953 0 1 0 17.83 0 a 8.91 2.6740049968007953 0 1 0 -17.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 16.46 a 7.72 2.315756257076015 0 1 0 15.44 0 a 7.72 2.315756257076015 0 1 0 -15.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.09 A 2 2 0 0 0 12.00 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.09 A 2 2 0 0 1 12.00 20.91"
      }
    ]
  ]
};

export const SomaPellet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 12.00 a 8.91 8.91 0 1 0 17.83 0 a 8.91 8.91 0 1 0 -17.83 0" />
      <path d="M 4.28 7.54 a 7.72 2.315756257076015 0 1 0 15.44 0 a 7.72 2.315756257076015 0 1 0 -15.44 0" />
      <path d="M 3.09 12.00 a 8.91 2.6740049968007953 0 1 0 17.83 0 a 8.91 2.6740049968007953 0 1 0 -17.83 0" />
      <path d="M 4.28 16.46 a 7.72 2.315756257076015 0 1 0 15.44 0 a 7.72 2.315756257076015 0 1 0 -15.44 0" />
      <path d="M 12.00 3.09 A 2 2 0 0 0 12.00 20.91" />
      <path d="M 12.00 3.09 A 2 2 0 0 1 12.00 20.91" />
      {children}
    </svg>
  );
});

export default SomaPellet;
