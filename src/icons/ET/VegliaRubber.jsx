import React from 'react';

export const iconData = {
  "id": "VegliaRubber",
  "name": "VegliaRubber",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.57 12.00 a 9.43 9.43 0 1 0 18.86 0 a 9.43 9.43 0 1 0 -18.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 8.86 a 8.89 2.6674678045209035 0 1 0 17.78 0 a 8.89 2.6674678045209035 0 1 0 -17.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 15.14 a 8.89 2.6674678045209035 0 1 0 17.78 0 a 8.89 2.6674678045209035 0 1 0 -17.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 5.33 A 2 2 0 0 0 18.67 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 5.33 A 2 2 0 0 1 18.67 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.57 A 2 2 0 0 0 12.00 21.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.57 A 2 2 0 0 1 12.00 21.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 5.33 A 2 2 0 0 0 5.33 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 5.33 A 2 2 0 0 1 5.33 18.67"
      }
    ]
  ]
};

export const VegliaRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.57 12.00 a 9.43 9.43 0 1 0 18.86 0 a 9.43 9.43 0 1 0 -18.86 0" />
      <path d="M 3.11 8.86 a 8.89 2.6674678045209035 0 1 0 17.78 0 a 8.89 2.6674678045209035 0 1 0 -17.78 0" />
      <path d="M 3.11 15.14 a 8.89 2.6674678045209035 0 1 0 17.78 0 a 8.89 2.6674678045209035 0 1 0 -17.78 0" />
      <path d="M 18.67 5.33 A 2 2 0 0 0 18.67 18.67" />
      <path d="M 18.67 5.33 A 2 2 0 0 1 18.67 18.67" />
      <path d="M 12.00 2.57 A 2 2 0 0 0 12.00 21.43" />
      <path d="M 12.00 2.57 A 2 2 0 0 1 12.00 21.43" />
      <path d="M 5.33 5.33 A 2 2 0 0 0 5.33 18.67" />
      <path d="M 5.33 5.33 A 2 2 0 0 1 5.33 18.67" />
      {children}
    </svg>
  );
});

export default VegliaRubber;
