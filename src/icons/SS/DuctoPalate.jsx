import React from 'react';

export const iconData = {
  "id": "DuctoPalate",
  "name": "DuctoPalate",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.53 0 a 8.77 8.77 0 1 0 -17.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 12.00 a 6.44 6.44 0 1 1 12.89 0 a 6.44 6.44 0 1 1 -12.89 0"
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
        "d": "M 17.84 17.84 L 19.26 19.26"
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
        "d": "M 6.16 17.84 L 4.74 19.26"
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
        "d": "M 6.16 6.16 L 4.74 4.74"
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
        "d": "M 17.84 6.16 L 19.26 4.74"
      }
    ]
  ]
};

export const DuctoPalate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.53 0 a 8.77 8.77 0 1 0 -17.53 0" />
      <path d="M 5.56 12.00 a 6.44 6.44 0 1 1 12.89 0 a 6.44 6.44 0 1 1 -12.89 0" />
      <path d="M 20.27 12.00 L 22.27 12.00" />
      <path d="M 17.84 17.84 L 19.26 19.26" />
      <path d="M 12.00 20.27 L 12.00 22.27" />
      <path d="M 6.16 17.84 L 4.74 19.26" />
      <path d="M 3.73 12.00 L 1.73 12.00" />
      <path d="M 6.16 6.16 L 4.74 4.74" />
      <path d="M 12.00 3.73 L 12.00 1.73" />
      <path d="M 17.84 6.16 L 19.26 4.74" />
      {children}
    </svg>
  );
});

export default DuctoPalate;
