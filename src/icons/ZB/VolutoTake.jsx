import React from 'react';

export const iconData = {
  "id": "VolutoTake",
  "name": "VolutoTake",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 5.07 C 12.74 7.86, 6.25 12.64, 16.24 3.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 5.13 A 6.91 4.53 159 0 0 14.95 13.69"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 2.26 A 6.08 5.17 95 0 0 20.44 13.96"
      }
    ]
  ]
};

export const VolutoTake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 5.07 C 12.74 7.86, 6.25 12.64, 16.24 3.92" />
      <path d="M 5.13 5.13 A 6.91 4.53 159 0 0 14.95 13.69" />
      <path d="M 2.57 2.26 A 6.08 5.17 95 0 0 20.44 13.96" />
      {children}
    </svg>
  );
});

export default VolutoTake;
