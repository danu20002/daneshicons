import React from 'react';

export const iconData = {
  "id": "ScaroJunction",
  "name": "ScaroJunction",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 9.25 a 7.79 2.3369709195819923 0 1 0 15.58 0 a 7.79 2.3369709195819923 0 1 0 -15.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 14.75 a 7.79 2.3369709195819923 0 1 0 15.58 0 a 7.79 2.3369709195819923 0 1 0 -15.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.74 A 2 2 0 0 0 12.00 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.74 A 2 2 0 0 1 12.00 20.26"
      }
    ]
  ]
};

export const ScaroJunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0" />
      <path d="M 4.21 9.25 a 7.79 2.3369709195819923 0 1 0 15.58 0 a 7.79 2.3369709195819923 0 1 0 -15.58 0" />
      <path d="M 4.21 14.75 a 7.79 2.3369709195819923 0 1 0 15.58 0 a 7.79 2.3369709195819923 0 1 0 -15.58 0" />
      <path d="M 12.00 3.74 A 2 2 0 0 0 12.00 20.26" />
      <path d="M 12.00 3.74 A 2 2 0 0 1 12.00 20.26" />
      {children}
    </svg>
  );
});

export default ScaroJunction;
