import React from 'react';

export const iconData = {
  "id": "UlulaRole",
  "name": "UlulaRole",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 5.90 C 19.00 17.20, 6.42 18.20, 21.81 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 9.31 C 16.64 14.53, 6.33 4.03, 19.56 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 4.61 C 11.55 19.41, 14.30 14.27, 20.37 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 4.14 C 7.99 14.81, 9.20 5.34, 16.66 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 2.28 C 11.48 13.39, 19.43 19.69, 21.22 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 9.85 C 12.77 10.98, 6.21 11.96, 14.59 20.63"
      }
    ]
  ]
};

export const UlulaRole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 5.90 C 19.00 17.20, 6.42 18.20, 21.81 20.72" />
      <path d="M 7.52 9.31 C 16.64 14.53, 6.33 4.03, 19.56 20.22" />
      <path d="M 2.75 4.61 C 11.55 19.41, 14.30 14.27, 20.37 17.53" />
      <path d="M 9.71 4.14 C 7.99 14.81, 9.20 5.34, 16.66 14.81" />
      <path d="M 2.83 2.28 C 11.48 13.39, 19.43 19.69, 21.22 18.88" />
      <path d="M 8.35 9.85 C 12.77 10.98, 6.21 11.96, 14.59 20.63" />
      {children}
    </svg>
  );
});

export default UlulaRole;
