import React from 'react';

export const iconData = {
  "id": "SacroAxel",
  "name": "SacroAxel",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 9.26 a 7.74 2.3228022469063245 0 1 0 15.49 0 a 7.74 2.3228022469063245 0 1 0 -15.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 14.74 a 7.74 2.3228022469063245 0 1 0 15.49 0 a 7.74 2.3228022469063245 0 1 0 -15.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 6.19 A 2 2 0 0 0 17.81 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 6.19 A 2 2 0 0 1 17.81 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 A 2 2 0 0 0 12.00 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 A 2 2 0 0 1 12.00 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 6.19 A 2 2 0 0 0 6.19 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 6.19 A 2 2 0 0 1 6.19 17.81"
      }
    ]
  ]
};

export const SacroAxel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      <path d="M 4.26 9.26 a 7.74 2.3228022469063245 0 1 0 15.49 0 a 7.74 2.3228022469063245 0 1 0 -15.49 0" />
      <path d="M 4.26 14.74 a 7.74 2.3228022469063245 0 1 0 15.49 0 a 7.74 2.3228022469063245 0 1 0 -15.49 0" />
      <path d="M 17.81 6.19 A 2 2 0 0 0 17.81 17.81" />
      <path d="M 17.81 6.19 A 2 2 0 0 1 17.81 17.81" />
      <path d="M 12.00 3.79 A 2 2 0 0 0 12.00 20.21" />
      <path d="M 12.00 3.79 A 2 2 0 0 1 12.00 20.21" />
      <path d="M 6.19 6.19 A 2 2 0 0 0 6.19 17.81" />
      <path d="M 6.19 6.19 A 2 2 0 0 1 6.19 17.81" />
      {children}
    </svg>
  );
});

export default SacroAxel;
