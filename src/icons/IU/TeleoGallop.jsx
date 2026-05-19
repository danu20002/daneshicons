import React from 'react';

export const iconData = {
  "id": "TeleoGallop",
  "name": "TeleoGallop",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.27 2.11 C 5.34 10.38, 5.98 4.19, 21.42 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 4.34 C 7.95 9.30, 14.10 8.93, 17.69 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 2.27 C 10.84 16.61, 12.19 7.99, 20.02 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 7.40 C 6.10 16.59, 16.62 12.63, 18.91 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 4.90 C 8.23 19.09, 15.58 18.40, 14.12 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 5.06 C 10.68 15.38, 15.61 6.74, 14.84 18.53"
      }
    ]
  ]
};

export const TeleoGallop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.27 2.11 C 5.34 10.38, 5.98 4.19, 21.42 14.74" />
      <path d="M 4.35 4.34 C 7.95 9.30, 14.10 8.93, 17.69 17.70" />
      <path d="M 6.41 2.27 C 10.84 16.61, 12.19 7.99, 20.02 18.93" />
      <path d="M 3.60 7.40 C 6.10 16.59, 16.62 12.63, 18.91 19.64" />
      <path d="M 5.21 4.90 C 8.23 19.09, 15.58 18.40, 14.12 14.36" />
      <path d="M 2.79 5.06 C 10.68 15.38, 15.61 6.74, 14.84 18.53" />
      {children}
    </svg>
  );
});

export default TeleoGallop;
