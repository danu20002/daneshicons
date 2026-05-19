import React from 'react';

export const iconData = {
  "id": "PicoVenture",
  "name": "PicoVenture",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 9.75 0 1 0 19.50 0 a 9.75 9.75 0 1 0 -19.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 8.75 a 9.19 2.7573694508334916 0 1 0 18.38 0 a 9.19 2.7573694508334916 0 1 0 -18.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 15.25 a 9.19 2.7573694508334916 0 1 0 18.38 0 a 9.19 2.7573694508334916 0 1 0 -18.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 0 12.00 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 1 12.00 21.75"
      }
    ]
  ]
};

export const PicoVenture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.25 12.00 a 9.75 9.75 0 1 0 19.50 0 a 9.75 9.75 0 1 0 -19.50 0" />
      <path d="M 2.81 8.75 a 9.19 2.7573694508334916 0 1 0 18.38 0 a 9.19 2.7573694508334916 0 1 0 -18.38 0" />
      <path d="M 2.81 15.25 a 9.19 2.7573694508334916 0 1 0 18.38 0 a 9.19 2.7573694508334916 0 1 0 -18.38 0" />
      <path d="M 12.00 2.25 A 2 2 0 0 0 12.00 21.75" />
      <path d="M 12.00 2.25 A 2 2 0 0 1 12.00 21.75" />
      {children}
    </svg>
  );
});

export default PicoVenture;
