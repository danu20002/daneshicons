import React from 'react';

export const iconData = {
  "id": "PlutoMerit",
  "name": "PlutoMerit",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.84 9.19 C 5.90 18.00, 15.71 4.36, 14.34 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 5.81 C 14.66 8.57, 11.62 19.08, 19.41 17.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 9.39 C 8.72 16.83, 11.73 17.90, 18.32 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 9.14 C 4.54 19.60, 14.64 14.23, 18.79 17.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 7.94 C 13.51 18.12, 7.97 7.48, 16.82 16.54"
      }
    ]
  ]
};

export const PlutoMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.84 9.19 C 5.90 18.00, 15.71 4.36, 14.34 15.89" />
      <path d="M 6.06 5.81 C 14.66 8.57, 11.62 19.08, 19.41 17.43" />
      <path d="M 9.45 9.39 C 8.72 16.83, 11.73 17.90, 18.32 15.74" />
      <path d="M 4.75 9.14 C 4.54 19.60, 14.64 14.23, 18.79 17.69" />
      <path d="M 6.46 7.94 C 13.51 18.12, 7.97 7.48, 16.82 16.54" />
      {children}
    </svg>
  );
});

export default PlutoMerit;
