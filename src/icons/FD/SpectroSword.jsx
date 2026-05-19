import React from 'react';

export const iconData = {
  "id": "SpectroSword",
  "name": "SpectroSword",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.34 4.52 C 12.07 12.05, 14.45 5.79, 15.94 16.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 4.99 C 19.73 5.26, 5.36 7.58, 14.12 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.11 5.47 C 10.82 10.44, 15.87 4.01, 15.64 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.51 C 16.94 16.16, 19.13 16.49, 14.69 18.53"
      }
    ]
  ]
};

export const SpectroSword = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.34 4.52 C 12.07 12.05, 14.45 5.79, 15.94 16.89" />
      <path d="M 3.21 4.99 C 19.73 5.26, 5.36 7.58, 14.12 14.74" />
      <path d="M 2.11 5.47 C 10.82 10.44, 15.87 4.01, 15.64 21.75" />
      <path d="M 8.29 5.51 C 16.94 16.16, 19.13 16.49, 14.69 18.53" />
      {children}
    </svg>
  );
});

export default SpectroSword;
