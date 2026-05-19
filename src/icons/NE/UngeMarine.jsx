import React from 'react';

export const iconData = {
  "id": "UngeMarine",
  "name": "UngeMarine",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.15 8.78 C 7.44 6.09, 7.31 4.23, 16.68 15.62"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 6.25 C 13.38 13.39, 7.04 18.57, 21.93 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 8.05 C 16.83 14.06, 11.18 13.40, 21.58 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 8.47 C 11.41 10.34, 4.19 8.58, 15.14 18.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 3.01 C 13.74 7.07, 11.35 6.47, 14.87 16.35"
      }
    ]
  ]
};

export const UngeMarine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.15 8.78 C 7.44 6.09, 7.31 4.23, 16.68 15.62" />
      <path d="M 6.58 6.25 C 13.38 13.39, 7.04 18.57, 21.93 21.69" />
      <path d="M 9.26 8.05 C 16.83 14.06, 11.18 13.40, 21.58 17.27" />
      <path d="M 9.43 8.47 C 11.41 10.34, 4.19 8.58, 15.14 18.57" />
      <path d="M 4.21 3.01 C 13.74 7.07, 11.35 6.47, 14.87 16.35" />
      {children}
    </svg>
  );
});

export default UngeMarine;
