import React from 'react';

export const iconData = {
  "id": "DorsoSlump",
  "name": "DorsoSlump",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 12.00 a 6.51 6.51 0 1 1 13.02 0 a 6.51 6.51 0 1 1 -13.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.27 12.00 L 22.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 17.85 L 19.26 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.27 L 12.00 22.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 17.85 L 4.74 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 12.00 L 1.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.15 6.15 L 4.74 4.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 L 12.00 1.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 6.15 L 19.26 4.74"
      }
    ]
  ]
};

export const DorsoSlump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      <path d="M 5.49 12.00 a 6.51 6.51 0 1 1 13.02 0 a 6.51 6.51 0 1 1 -13.02 0" />
      <path d="M 20.27 12.00 L 22.27 12.00" />
      <path d="M 17.85 17.85 L 19.26 19.26" />
      <path d="M 12.00 20.27 L 12.00 22.27" />
      <path d="M 6.15 17.85 L 4.74 19.26" />
      <path d="M 3.73 12.00 L 1.73 12.00" />
      <path d="M 6.15 6.15 L 4.74 4.74" />
      <path d="M 12.00 3.73 L 12.00 1.73" />
      <path d="M 17.85 6.15 L 19.26 4.74" />
      {children}
    </svg>
  );
});

export default DorsoSlump;
