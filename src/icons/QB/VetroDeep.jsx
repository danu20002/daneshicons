import React from 'react';

export const iconData = {
  "id": "VetroDeep",
  "name": "VetroDeep",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.43 0 a 2.22 2.22 0 1 0 -4.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 12.00 a 3.73 3.73 0 1 0 7.46 0 a 3.73 3.73 0 1 0 -7.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 12.00 a 5.46 5.46 0 1 0 10.91 0 a 5.46 5.46 0 1 0 -10.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0"
      }
    ]
  ]
};

export const VetroDeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.43 0 a 2.22 2.22 0 1 0 -4.43 0" />
      <path d="M 8.27 12.00 a 3.73 3.73 0 1 0 7.46 0 a 3.73 3.73 0 1 0 -7.46 0" />
      <path d="M 6.54 12.00 a 5.46 5.46 0 1 0 10.91 0 a 5.46 5.46 0 1 0 -10.91 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0" />
      <path d="M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0" />
      {children}
    </svg>
  );
});

export default VetroDeep;
