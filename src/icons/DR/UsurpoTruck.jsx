import React from 'react';

export const iconData = {
  "id": "UsurpoTruck",
  "name": "UsurpoTruck",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.93 4.00 C 18.82 16.19, 7.57 13.78, 17.65 15.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 3.54 C 6.37 5.74, 13.75 10.35, 20.04 17.20"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 7.41 C 7.82 8.09, 7.30 16.37, 20.88 16.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 9.98 C 12.72 14.09, 10.47 17.68, 20.25 14.87"
      }
    ]
  ]
};

export const UsurpoTruck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.93 4.00 C 18.82 16.19, 7.57 13.78, 17.65 15.33" />
      <path d="M 4.44 3.54 C 6.37 5.74, 13.75 10.35, 20.04 17.20" />
      <path d="M 4.71 7.41 C 7.82 8.09, 7.30 16.37, 20.88 16.16" />
      <path d="M 3.79 9.98 C 12.72 14.09, 10.47 17.68, 20.25 14.87" />
      {children}
    </svg>
  );
});

export default UsurpoTruck;
