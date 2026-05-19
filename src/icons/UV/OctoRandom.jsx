import React from 'react';

export const iconData = {
  "id": "OctoRandom",
  "name": "OctoRandom",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.12 12.00 a 9.88 9.88 0 1 0 19.75 0 a 9.88 9.88 0 1 0 -19.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 12.00 a 9.88 2.962905684672296 0 1 0 19.75 0 a 9.88 2.962905684672296 0 1 0 -19.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 0 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 1 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.12 A 2 2 0 0 0 12.00 21.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.12 A 2 2 0 0 1 12.00 21.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 0 5.02 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 1 5.02 18.98"
      }
    ]
  ]
};

export const OctoRandom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.12 12.00 a 9.88 9.88 0 1 0 19.75 0 a 9.88 9.88 0 1 0 -19.75 0" />
      <path d="M 2.12 12.00 a 9.88 2.962905684672296 0 1 0 19.75 0 a 9.88 2.962905684672296 0 1 0 -19.75 0" />
      <path d="M 18.98 5.02 A 2 2 0 0 0 18.98 18.98" />
      <path d="M 18.98 5.02 A 2 2 0 0 1 18.98 18.98" />
      <path d="M 12.00 2.12 A 2 2 0 0 0 12.00 21.88" />
      <path d="M 12.00 2.12 A 2 2 0 0 1 12.00 21.88" />
      <path d="M 5.02 5.02 A 2 2 0 0 0 5.02 18.98" />
      <path d="M 5.02 5.02 A 2 2 0 0 1 5.02 18.98" />
      {children}
    </svg>
  );
});

export default OctoRandom;
