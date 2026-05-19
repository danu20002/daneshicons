import React from 'react';

export const iconData = {
  "id": "TigroDuck",
  "name": "TigroDuck",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.76 5.30 C 19.87 12.23, 6.61 14.30, 20.30 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 4.50 C 10.39 10.18, 17.69 18.20, 15.26 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 4.14 C 19.08 17.62, 18.52 5.23, 15.56 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 4.56 C 13.27 8.29, 12.23 8.00, 15.95 15.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 4.59 C 12.38 11.57, 4.62 10.44, 21.43 15.38"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 7.49 C 11.21 6.45, 15.94 17.08, 15.36 17.34"
      }
    ]
  ]
};

export const TigroDuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.76 5.30 C 19.87 12.23, 6.61 14.30, 20.30 16.31" />
      <path d="M 8.06 4.50 C 10.39 10.18, 17.69 18.20, 15.26 17.22" />
      <path d="M 3.50 4.14 C 19.08 17.62, 18.52 5.23, 15.56 21.63" />
      <path d="M 7.97 4.56 C 13.27 8.29, 12.23 8.00, 15.95 15.88" />
      <path d="M 6.91 4.59 C 12.38 11.57, 4.62 10.44, 21.43 15.38" />
      <path d="M 2.91 7.49 C 11.21 6.45, 15.94 17.08, 15.36 17.34" />
      {children}
    </svg>
  );
});

export default TigroDuck;
