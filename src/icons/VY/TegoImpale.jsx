import React from 'react';

export const iconData = {
  "id": "TegoImpale",
  "name": "TegoImpale",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 7.43 C 14.32 5.20, 7.64 19.97, 21.43 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 7.15 C 17.59 5.39, 8.10 9.61, 16.46 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 2.33 C 11.24 14.29, 16.64 17.26, 19.19 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 9.32 C 12.10 14.40, 10.51 13.72, 21.21 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 5.99 C 12.85 18.77, 9.84 13.15, 17.89 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 3.45 C 9.22 5.04, 11.67 17.89, 19.18 15.57"
      }
    ]
  ]
};

export const TegoImpale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 7.43 C 14.32 5.20, 7.64 19.97, 21.43 20.22" />
      <path d="M 5.19 7.15 C 17.59 5.39, 8.10 9.61, 16.46 17.82" />
      <path d="M 2.54 2.33 C 11.24 14.29, 16.64 17.26, 19.19 19.36" />
      <path d="M 4.50 9.32 C 12.10 14.40, 10.51 13.72, 21.21 16.68" />
      <path d="M 3.82 5.99 C 12.85 18.77, 9.84 13.15, 17.89 17.87" />
      <path d="M 4.63 3.45 C 9.22 5.04, 11.67 17.89, 19.18 15.57" />
      {children}
    </svg>
  );
});

export default TegoImpale;
