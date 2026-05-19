import React from 'react';

export const iconData = {
  "id": "MycoReverse",
  "name": "MycoReverse",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 12.00 a 5.10 5.10 0 1 0 10.19 0 a 5.10 5.10 0 1 0 -10.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const MycoReverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0" stroke-dasharray="3 2" />
      <path d="M 6.90 12.00 a 5.10 5.10 0 1 0 10.19 0 a 5.10 5.10 0 1 0 -10.19 0" />
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default MycoReverse;
