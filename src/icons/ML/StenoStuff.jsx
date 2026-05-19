import React from 'react';

export const iconData = {
  "id": "StenoStuff",
  "name": "StenoStuff",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.90 9.19 C 18.75 13.66, 13.28 10.14, 17.83 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 8.08 C 6.10 16.12, 8.27 16.16, 19.48 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 6.75 C 11.56 11.76, 11.17 15.04, 21.25 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 3.43 C 17.13 10.64, 6.36 11.82, 16.06 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 8.39 C 9.95 14.70, 7.70 17.65, 14.44 18.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 9.41 C 9.59 14.11, 12.78 16.37, 19.39 21.83"
      }
    ]
  ]
};

export const StenoStuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.90 9.19 C 18.75 13.66, 13.28 10.14, 17.83 14.81" />
      <path d="M 2.31 8.08 C 6.10 16.12, 8.27 16.16, 19.48 14.98" />
      <path d="M 3.30 6.75 C 11.56 11.76, 11.17 15.04, 21.25 15.30" />
      <path d="M 8.63 3.43 C 17.13 10.64, 6.36 11.82, 16.06 18.08" />
      <path d="M 2.17 8.39 C 9.95 14.70, 7.70 17.65, 14.44 18.59" />
      <path d="M 4.15 9.41 C 9.59 14.11, 12.78 16.37, 19.39 21.83" />
      {children}
    </svg>
  );
});

export default StenoStuff;
