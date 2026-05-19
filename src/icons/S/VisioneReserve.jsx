import React from 'react';

export const iconData = {
  "id": "VisioneReserve",
  "name": "VisioneReserve",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 12.00 a 7.26 7.26 0 1 0 14.51 0 a 7.26 7.26 0 1 0 -14.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 12.00 a 5.72 5.72 0 1 1 11.44 0 a 5.72 5.72 0 1 1 -11.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 12.00 L 20.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 15.65 L 19.37 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 14.81 18.15 L 15.64 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 11.04 18.69 L 10.75 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 17.11 L 6.27 18.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 13.90 L 3.60 14.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 10.10 L 3.60 9.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 6.89 L 6.27 5.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.04 5.31 L 10.75 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.81 5.85 L 15.64 4.03"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 8.35 L 19.37 7.27"
      }
    ]
  ]
};

export const VisioneReserve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 12.00 a 7.26 7.26 0 1 0 14.51 0 a 7.26 7.26 0 1 0 -14.51 0" />
      <path d="M 6.28 12.00 a 5.72 5.72 0 1 1 11.44 0 a 5.72 5.72 0 1 1 -11.44 0" />
      <path d="M 18.76 12.00 L 20.76 12.00" />
      <path d="M 17.68 15.65 L 19.37 16.73" />
      <path d="M 14.81 18.15 L 15.64 19.97" />
      <path d="M 11.04 18.69 L 10.75 20.67" />
      <path d="M 7.57 17.11 L 6.27 18.62" />
      <path d="M 5.52 13.90 L 3.60 14.47" />
      <path d="M 5.52 10.10 L 3.60 9.53" />
      <path d="M 7.57 6.89 L 6.27 5.38" />
      <path d="M 11.04 5.31 L 10.75 3.33" />
      <path d="M 14.81 5.85 L 15.64 4.03" />
      <path d="M 17.68 8.35 L 19.37 7.27" />
      {children}
    </svg>
  );
});

export default VisioneReserve;
