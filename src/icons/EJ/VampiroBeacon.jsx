import React from 'react';

export const iconData = {
  "id": "VampiroBeacon",
  "name": "VampiroBeacon",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 12.00 a 5.56 5.56 0 1 0 11.11 0 a 5.56 5.56 0 1 0 -11.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 12.00 a 7.27 7.27 0 1 0 14.55 0 a 7.27 7.27 0 1 0 -14.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0"
      }
    ]
  ]
};

export const VampiroBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0" stroke-dasharray="6 3" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0" stroke-dasharray="5 3" />
      <path d="M 6.44 12.00 a 5.56 5.56 0 1 0 11.11 0 a 5.56 5.56 0 1 0 -11.11 0" />
      <path d="M 4.73 12.00 a 7.27 7.27 0 1 0 14.55 0 a 7.27 7.27 0 1 0 -14.55 0" />
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0" />
      {children}
    </svg>
  );
});

export default VampiroBeacon;
