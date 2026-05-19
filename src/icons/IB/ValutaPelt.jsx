import React from 'react';

export const iconData = {
  "id": "ValutaPelt",
  "name": "ValutaPelt",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.83 8.29 C 15.06 16.92, 7.16 13.63, 17.76 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 8.86 C 7.54 11.48, 19.21 8.49, 19.50 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 4.11 C 4.95 9.47, 9.26 6.38, 16.55 16.53"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 3.99 C 19.99 14.36, 17.62 14.67, 16.39 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 2.16 3.13 C 4.58 13.62, 12.91 14.04, 18.58 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 3.01 C 11.86 19.01, 12.14 18.44, 21.38 21.60"
      }
    ]
  ]
};

export const ValutaPelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.83 8.29 C 15.06 16.92, 7.16 13.63, 17.76 17.78" />
      <path d="M 9.96 8.86 C 7.54 11.48, 19.21 8.49, 19.50 16.69" />
      <path d="M 2.12 4.11 C 4.95 9.47, 9.26 6.38, 16.55 16.53" />
      <path d="M 3.78 3.99 C 19.99 14.36, 17.62 14.67, 16.39 19.23" />
      <path d="M 2.16 3.13 C 4.58 13.62, 12.91 14.04, 18.58 20.25" />
      <path d="M 6.43 3.01 C 11.86 19.01, 12.14 18.44, 21.38 21.60" />
      {children}
    </svg>
  );
});

export default ValutaPelt;
