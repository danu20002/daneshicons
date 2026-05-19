import React from 'react';

export const iconData = {
  "id": "IgniStaff",
  "name": "IgniStaff",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 a 4.73 4.73 0 1 0 9.46 0 a 4.73 4.73 0 1 0 -9.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.81 0 a 7.41 7.41 0 1 0 -14.81 0"
      }
    ]
  ]
};

export const IgniStaff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0" stroke-dasharray="6 1" />
      <path d="M 7.27 12.00 a 4.73 4.73 0 1 0 9.46 0 a 4.73 4.73 0 1 0 -9.46 0" />
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.81 0 a 7.41 7.41 0 1 0 -14.81 0" />
      {children}
    </svg>
  );
});

export default IgniStaff;
