import React from 'react';

export const iconData = {
  "id": "XericoTown",
  "name": "XericoTown",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 7.59 C 16.55 6.86, 17.83 16.62, 14.55 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 6.45 C 14.25 11.88, 9.31 12.99, 17.93 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 2.69 C 10.88 6.20, 15.14 9.92, 14.73 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 2.70 C 7.56 5.93, 9.66 15.69, 17.38 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 2.93 C 17.58 18.09, 5.86 19.66, 18.35 14.22"
      }
    ]
  ]
};

export const XericoTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 7.59 C 16.55 6.86, 17.83 16.62, 14.55 19.42" />
      <path d="M 9.14 6.45 C 14.25 11.88, 9.31 12.99, 17.93 20.97" />
      <path d="M 4.63 2.69 C 10.88 6.20, 15.14 9.92, 14.73 20.98" />
      <path d="M 4.97 2.70 C 7.56 5.93, 9.66 15.69, 17.38 20.46" />
      <path d="M 8.38 2.93 C 17.58 18.09, 5.86 19.66, 18.35 14.22" />
      {children}
    </svg>
  );
});

export default XericoTown;
