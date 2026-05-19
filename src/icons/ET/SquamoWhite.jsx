import React from 'react';

export const iconData = {
  "id": "SquamoWhite",
  "name": "SquamoWhite",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 7.17 a 6.44 1.9326669842004778 0 1 0 12.88 0 a 6.44 1.9326669842004778 0 1 0 -12.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 10.39 a 7.89 2.367023977007384 0 1 0 15.78 0 a 7.89 2.367023977007384 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 13.61 a 7.89 2.367023977007384 0 1 0 15.78 0 a 7.89 2.367023977007384 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 16.83 a 6.44 1.9326669842004778 0 1 0 12.88 0 a 6.44 1.9326669842004778 0 1 0 -12.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.03 A 2 2 0 0 0 16.03 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.03 A 2 2 0 0 1 16.03 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.03 A 2 2 0 0 0 7.97 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.03 A 2 2 0 0 1 7.97 18.97"
      }
    ]
  ]
};

export const SquamoWhite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      <path d="M 5.56 7.17 a 6.44 1.9326669842004778 0 1 0 12.88 0 a 6.44 1.9326669842004778 0 1 0 -12.88 0" />
      <path d="M 4.11 10.39 a 7.89 2.367023977007384 0 1 0 15.78 0 a 7.89 2.367023977007384 0 1 0 -15.78 0" />
      <path d="M 4.11 13.61 a 7.89 2.367023977007384 0 1 0 15.78 0 a 7.89 2.367023977007384 0 1 0 -15.78 0" />
      <path d="M 5.56 16.83 a 6.44 1.9326669842004778 0 1 0 12.88 0 a 6.44 1.9326669842004778 0 1 0 -12.88 0" />
      <path d="M 16.03 5.03 A 2 2 0 0 0 16.03 18.97" />
      <path d="M 16.03 5.03 A 2 2 0 0 1 16.03 18.97" />
      <path d="M 7.97 5.03 A 2 2 0 0 0 7.97 18.97" />
      <path d="M 7.97 5.03 A 2 2 0 0 1 7.97 18.97" />
      {children}
    </svg>
  );
});

export default SquamoWhite;
