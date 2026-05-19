import React from 'react';

export const iconData = {
  "id": "PlumboRapid",
  "name": "PlumboRapid",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.94 12.00 a 9.06 9.06 0 1 0 18.12 0 a 9.06 9.06 0 1 0 -18.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 12.00 a 9.06 2.7175428476650265 0 1 0 18.12 0 a 9.06 2.7175428476650265 0 1 0 -18.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.41 5.59 A 2 2 0 0 0 18.41 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 18.41 5.59 A 2 2 0 0 1 18.41 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.94 A 2 2 0 0 0 12.00 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.94 A 2 2 0 0 1 12.00 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 5.59 A 2 2 0 0 0 5.59 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 5.59 A 2 2 0 0 1 5.59 18.41"
      }
    ]
  ]
};

export const PlumboRapid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.94 12.00 a 9.06 9.06 0 1 0 18.12 0 a 9.06 9.06 0 1 0 -18.12 0" />
      <path d="M 2.94 12.00 a 9.06 2.7175428476650265 0 1 0 18.12 0 a 9.06 2.7175428476650265 0 1 0 -18.12 0" />
      <path d="M 18.41 5.59 A 2 2 0 0 0 18.41 18.41" />
      <path d="M 18.41 5.59 A 2 2 0 0 1 18.41 18.41" />
      <path d="M 12.00 2.94 A 2 2 0 0 0 12.00 21.06" />
      <path d="M 12.00 2.94 A 2 2 0 0 1 12.00 21.06" />
      <path d="M 5.59 5.59 A 2 2 0 0 0 5.59 18.41" />
      <path d="M 5.59 5.59 A 2 2 0 0 1 5.59 18.41" />
      {children}
    </svg>
  );
});

export default PlumboRapid;
