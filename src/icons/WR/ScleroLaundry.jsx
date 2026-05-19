import React from 'react';

export const iconData = {
  "id": "ScleroLaundry",
  "name": "ScleroLaundry",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.74 3.55 C 4.89 10.74, 10.74 12.74, 14.94 17.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 6.22 C 16.15 4.37, 13.81 13.99, 15.16 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.30 4.23 C 9.77 17.45, 15.52 10.79, 14.55 20.96"
      }
    ]
  ]
};

export const ScleroLaundry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.74 3.55 C 4.89 10.74, 10.74 12.74, 14.94 17.38" />
      <path d="M 5.26 6.22 C 16.15 4.37, 13.81 13.99, 15.16 15.95" />
      <path d="M 9.30 4.23 C 9.77 17.45, 15.52 10.79, 14.55 20.96" />
      {children}
    </svg>
  );
});

export default ScleroLaundry;
