import React from 'react';

export const iconData = {
  "id": "EtherArt",
  "name": "EtherArt",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.16 3.25 C 15.59 19.55, 7.66 13.98, 16.54 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 5.95 C 8.27 8.63, 16.55 19.10, 16.07 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 3.51 C 17.27 19.83, 18.92 19.78, 21.94 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 3.59 C 16.11 14.50, 6.89 18.43, 20.91 16.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 9.11 C 16.02 7.61, 5.06 16.38, 19.25 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 9.64 C 13.74 16.37, 6.85 6.64, 15.81 20.22"
      }
    ]
  ]
};

export const EtherArt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.16 3.25 C 15.59 19.55, 7.66 13.98, 16.54 18.38" />
      <path d="M 9.82 5.95 C 8.27 8.63, 16.55 19.10, 16.07 20.65" />
      <path d="M 3.30 3.51 C 17.27 19.83, 18.92 19.78, 21.94 14.81" />
      <path d="M 3.11 3.59 C 16.11 14.50, 6.89 18.43, 20.91 16.29" />
      <path d="M 9.47 9.11 C 16.02 7.61, 5.06 16.38, 19.25 14.89" />
      <path d="M 2.30 9.64 C 13.74 16.37, 6.85 6.64, 15.81 20.22" />
      {children}
    </svg>
  );
});

export default EtherArt;
