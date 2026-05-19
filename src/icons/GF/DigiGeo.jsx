import React from 'react';

export const iconData = {
  "id": "DigiGeo",
  "name": "DigiGeo",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 9.75 0 1 0 19.51 0 a 9.75 9.75 0 1 0 -19.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 7.12 a 8.45 2.533994682019591 0 1 0 16.89 0 a 8.45 2.533994682019591 0 1 0 -16.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 2.9260050235781816 0 1 0 19.51 0 a 9.75 2.9260050235781816 0 1 0 -19.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 16.88 a 8.45 2.533994682019591 0 1 0 16.89 0 a 8.45 2.533994682019591 0 1 0 -16.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 3.55 A 2 2 0 0 0 16.88 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 3.55 A 2 2 0 0 1 16.88 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 3.55 A 2 2 0 0 0 7.12 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 3.55 A 2 2 0 0 1 7.12 20.45"
      }
    ]
  ]
};

export const DigiGeo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.25 12.00 a 9.75 9.75 0 1 0 19.51 0 a 9.75 9.75 0 1 0 -19.51 0" />
      <path d="M 3.55 7.12 a 8.45 2.533994682019591 0 1 0 16.89 0 a 8.45 2.533994682019591 0 1 0 -16.89 0" />
      <path d="M 2.25 12.00 a 9.75 2.9260050235781816 0 1 0 19.51 0 a 9.75 2.9260050235781816 0 1 0 -19.51 0" />
      <path d="M 3.55 16.88 a 8.45 2.533994682019591 0 1 0 16.89 0 a 8.45 2.533994682019591 0 1 0 -16.89 0" />
      <path d="M 16.88 3.55 A 2 2 0 0 0 16.88 20.45" />
      <path d="M 16.88 3.55 A 2 2 0 0 1 16.88 20.45" />
      <path d="M 7.12 3.55 A 2 2 0 0 0 7.12 20.45" />
      <path d="M 7.12 3.55 A 2 2 0 0 1 7.12 20.45" />
      {children}
    </svg>
  );
});

export default DigiGeo;
