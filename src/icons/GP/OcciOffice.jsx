import React from 'react';

export const iconData = {
  "id": "OcciOffice",
  "name": "OcciOffice",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 3.24 C 9.67 18.61, 6.57 17.17, 16.62 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 9.35 C 13.63 10.32, 17.80 12.71, 14.41 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 6.68 C 14.25 5.43, 13.22 10.35, 21.53 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 7.25 C 14.49 4.87, 13.21 5.15, 14.95 16.47"
      }
    ]
  ]
};

export const OcciOffice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 3.24 C 9.67 18.61, 6.57 17.17, 16.62 18.07" />
      <path d="M 8.41 9.35 C 13.63 10.32, 17.80 12.71, 14.41 21.97" />
      <path d="M 4.53 6.68 C 14.25 5.43, 13.22 10.35, 21.53 16.39" />
      <path d="M 7.31 7.25 C 14.49 4.87, 13.21 5.15, 14.95 16.47" />
      {children}
    </svg>
  );
});

export default OcciOffice;
