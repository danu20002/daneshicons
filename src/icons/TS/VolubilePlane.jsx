import React from 'react';

export const iconData = {
  "id": "VolubilePlane",
  "name": "VolubilePlane",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.03 0 a 2.02 2.02 0 1 0 -4.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 0 10.53 0 a 5.27 5.27 0 1 0 -10.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 12.00 a 7.28 7.28 0 1 0 14.56 0 a 7.28 7.28 0 1 0 -14.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0"
      }
    ]
  ]
};

export const VolubilePlane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.03 0 a 2.02 2.02 0 1 0 -4.03 0" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0" stroke-dasharray="3 1" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 0 10.53 0 a 5.27 5.27 0 1 0 -10.53 0" />
      <path d="M 4.72 12.00 a 7.28 7.28 0 1 0 14.56 0 a 7.28 7.28 0 1 0 -14.56 0" />
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0" />
      {children}
    </svg>
  );
});

export default VolubilePlane;
