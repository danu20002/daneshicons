import React from 'react';

export const iconData = {
  "id": "ZambelloPupil",
  "name": "ZambelloPupil",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 8.24 0 1 0 16.47 0 a 8.24 8.24 0 1 0 -16.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 12.00 a 5.43 5.43 0 1 1 10.85 0 a 5.43 5.43 0 1 1 -10.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.74 12.00 L 21.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 16.97 L 19.46 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 19.62 L 13.69 21.59"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 18.70 L 7.13 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 14.65 L 2.85 15.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 9.35 L 2.85 8.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 5.30 L 7.13 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 4.38 L 13.69 2.41"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 7.03 L 19.46 5.74"
      }
    ]
  ]
};

export const ZambelloPupil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 12.00 a 8.24 8.24 0 1 0 16.47 0 a 8.24 8.24 0 1 0 -16.47 0" />
      <path d="M 6.57 12.00 a 5.43 5.43 0 1 1 10.85 0 a 5.43 5.43 0 1 1 -10.85 0" />
      <path d="M 19.74 12.00 L 21.74 12.00" />
      <path d="M 17.93 16.97 L 19.46 18.26" />
      <path d="M 13.34 19.62 L 13.69 21.59" />
      <path d="M 8.13 18.70 L 7.13 20.43" />
      <path d="M 4.73 14.65 L 2.85 15.33" />
      <path d="M 4.73 9.35 L 2.85 8.67" />
      <path d="M 8.13 5.30 L 7.13 3.57" />
      <path d="M 13.34 4.38 L 13.69 2.41" />
      <path d="M 17.93 7.03 L 19.46 5.74" />
      {children}
    </svg>
  );
});

export default ZambelloPupil;
