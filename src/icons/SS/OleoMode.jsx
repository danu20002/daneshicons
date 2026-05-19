import React from 'react';

export const iconData = {
  "id": "OleoMode",
  "name": "OleoMode",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 8.24 0 1 0 16.49 0 a 8.24 8.24 0 1 0 -16.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 12.00 a 6.62 6.62 0 1 1 13.25 0 a 6.62 6.62 0 1 1 -13.25 0"
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
        "d": "M 17.48 17.48 L 18.89 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.74 L 12.00 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 17.48 L 5.11 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 12.00 L 2.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 6.52 L 5.11 5.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.26 L 12.00 2.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 6.52 L 18.89 5.11"
      }
    ]
  ]
};

export const OleoMode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 12.00 a 8.24 8.24 0 1 0 16.49 0 a 8.24 8.24 0 1 0 -16.49 0" />
      <path d="M 5.38 12.00 a 6.62 6.62 0 1 1 13.25 0 a 6.62 6.62 0 1 1 -13.25 0" />
      <path d="M 19.74 12.00 L 21.74 12.00" />
      <path d="M 17.48 17.48 L 18.89 18.89" />
      <path d="M 12.00 19.74 L 12.00 21.74" />
      <path d="M 6.52 17.48 L 5.11 18.89" />
      <path d="M 4.26 12.00 L 2.26 12.00" />
      <path d="M 6.52 6.52 L 5.11 5.11" />
      <path d="M 12.00 4.26 L 12.00 2.26" />
      <path d="M 17.48 6.52 L 18.89 5.11" />
      {children}
    </svg>
  );
});

export default OleoMode;
