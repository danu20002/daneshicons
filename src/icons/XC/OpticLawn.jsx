import React from 'react';

export const iconData = {
  "id": "OpticLawn",
  "name": "OpticLawn",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 12.00 a 7.46 7.46 0 1 0 14.92 0 a 7.46 7.46 0 1 0 -14.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 1 9.82 0 a 4.91 4.91 0 1 1 -9.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 12.00 L 20.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 17.44 L 17.59 19.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 18.78 L 10.01 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 15.02 L 3.93 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 8.98 L 3.93 8.11"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 5.22 L 10.01 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 6.56 L 17.59 5.00"
      }
    ]
  ]
};

export const OpticLawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 12.00 a 7.46 7.46 0 1 0 14.92 0 a 7.46 7.46 0 1 0 -14.92 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 1 9.82 0 a 4.91 4.91 0 1 1 -9.82 0" />
      <path d="M 18.96 12.00 L 20.96 12.00" />
      <path d="M 16.34 17.44 L 17.59 19.00" />
      <path d="M 10.45 18.78 L 10.01 20.73" />
      <path d="M 5.73 15.02 L 3.93 15.89" />
      <path d="M 5.73 8.98 L 3.93 8.11" />
      <path d="M 10.45 5.22 L 10.01 3.27" />
      <path d="M 16.34 6.56 L 17.59 5.00" />
      {children}
    </svg>
  );
});

export default OpticLawn;
