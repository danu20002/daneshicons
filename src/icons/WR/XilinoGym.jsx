import React from 'react';

export const iconData = {
  "id": "XilinoGym",
  "name": "XilinoGym",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 6.16 C 8.41 15.52, 4.09 13.84, 16.89 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.50 7.58 C 13.46 9.51, 15.18 16.29, 20.33 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 5.74 C 10.53 13.24, 17.71 4.17, 18.56 17.87"
      }
    ]
  ]
};

export const XilinoGym = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 6.16 C 8.41 15.52, 4.09 13.84, 16.89 19.80" />
      <path d="M 9.50 7.58 C 13.46 9.51, 15.18 16.29, 20.33 19.62" />
      <path d="M 8.35 5.74 C 10.53 13.24, 17.71 4.17, 18.56 17.87" />
      {children}
    </svg>
  );
});

export default XilinoGym;
