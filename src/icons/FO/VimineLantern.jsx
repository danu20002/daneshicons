import React from 'react';

export const iconData = {
  "id": "VimineLantern",
  "name": "VimineLantern",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 12.00 a 5.70 5.70 0 1 1 11.41 0 a 5.70 5.70 0 1 1 -11.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 12.00 L 21.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 18.72 L 16.88 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 18.72 L 7.12 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 12.00 L 2.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 5.28 L 7.12 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 5.28 L 16.88 3.55"
      }
    ]
  ]
};

export const VimineLantern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0" />
      <path d="M 6.30 12.00 a 5.70 5.70 0 1 1 11.41 0 a 5.70 5.70 0 1 1 -11.41 0" />
      <path d="M 19.76 12.00 L 21.76 12.00" />
      <path d="M 15.88 18.72 L 16.88 20.45" />
      <path d="M 8.12 18.72 L 7.12 20.45" />
      <path d="M 4.24 12.00 L 2.24 12.00" />
      <path d="M 8.12 5.28 L 7.12 3.55" />
      <path d="M 15.88 5.28 L 16.88 3.55" />
      {children}
    </svg>
  );
});

export default VimineLantern;
