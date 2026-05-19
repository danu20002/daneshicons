import React from 'react';

export const iconData = {
  "id": "NomoMud",
  "name": "NomoMud",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.81 6.79 C 8.72 19.43, 6.43 11.39, 21.96 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 9.96 C 18.46 4.76, 15.30 12.05, 21.93 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 6.44 C 10.95 9.49, 12.77 17.82, 18.48 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 9.13 C 9.71 12.20, 10.73 7.39, 14.57 21.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 5.01 C 7.62 15.26, 8.60 5.38, 15.90 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 8.93 C 5.23 4.73, 6.77 4.36, 21.04 17.29"
      }
    ]
  ]
};

export const NomoMud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.81 6.79 C 8.72 19.43, 6.43 11.39, 21.96 14.89" />
      <path d="M 8.14 9.96 C 18.46 4.76, 15.30 12.05, 21.93 14.98" />
      <path d="M 4.38 6.44 C 10.95 9.49, 12.77 17.82, 18.48 14.41" />
      <path d="M 5.47 9.13 C 9.71 12.20, 10.73 7.39, 14.57 21.59" />
      <path d="M 3.26 5.01 C 7.62 15.26, 8.60 5.38, 15.90 21.92" />
      <path d="M 2.35 8.93 C 5.23 4.73, 6.77 4.36, 21.04 17.29" />
      {children}
    </svg>
  );
});

export default NomoMud;
