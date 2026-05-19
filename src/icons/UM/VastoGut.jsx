import React from 'react';

export const iconData = {
  "id": "VastoGut",
  "name": "VastoGut",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.26 3.97 C 18.77 15.60, 9.74 4.31, 18.89 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 3.94 C 13.53 9.37, 5.31 13.99, 17.03 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 7.94 C 14.66 9.31, 19.35 6.86, 14.66 16.48"
      }
    ]
  ]
};

export const VastoGut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.26 3.97 C 18.77 15.60, 9.74 4.31, 18.89 19.93" />
      <path d="M 7.14 3.94 C 13.53 9.37, 5.31 13.99, 17.03 20.28" />
      <path d="M 8.97 7.94 C 14.66 9.31, 19.35 6.86, 14.66 16.48" />
      {children}
    </svg>
  );
});

export default VastoGut;
