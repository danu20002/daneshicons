import React from 'react';

export const iconData = {
  "id": "VogaPalate",
  "name": "VogaPalate",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 4.72 C 8.53 17.25, 12.42 16.89, 17.32 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 3.53 C 17.14 6.84, 6.99 14.78, 19.70 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 2.24 C 10.91 5.37, 10.14 17.47, 17.52 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 8.00 C 7.97 13.46, 9.59 5.97, 14.56 15.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 5.13 C 11.03 14.32, 7.23 19.43, 17.55 20.28"
      }
    ]
  ]
};

export const VogaPalate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 4.72 C 8.53 17.25, 12.42 16.89, 17.32 16.56" />
      <path d="M 3.87 3.53 C 17.14 6.84, 6.99 14.78, 19.70 19.46" />
      <path d="M 3.44 2.24 C 10.91 5.37, 10.14 17.47, 17.52 16.22" />
      <path d="M 7.89 8.00 C 7.97 13.46, 9.59 5.97, 14.56 15.19" />
      <path d="M 7.12 5.13 C 11.03 14.32, 7.23 19.43, 17.55 20.28" />
      {children}
    </svg>
  );
});

export default VogaPalate;
