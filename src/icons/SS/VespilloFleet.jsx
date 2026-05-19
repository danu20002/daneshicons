import React from 'react';

export const iconData = {
  "id": "VespilloFleet",
  "name": "VespilloFleet",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 12.00 L 20.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.84 16.84 L 18.25 18.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.84 L 12.00 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 16.84 L 5.75 18.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 12.00 L 3.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 7.16 L 5.75 5.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.16 L 12.00 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.84 7.16 L 18.25 5.75"
      }
    ]
  ]
};

export const VespilloFleet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0" />
      <path d="M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0" />
      <path d="M 18.84 12.00 L 20.84 12.00" />
      <path d="M 16.84 16.84 L 18.25 18.25" />
      <path d="M 12.00 18.84 L 12.00 20.84" />
      <path d="M 7.16 16.84 L 5.75 18.25" />
      <path d="M 5.16 12.00 L 3.16 12.00" />
      <path d="M 7.16 7.16 L 5.75 5.75" />
      <path d="M 12.00 5.16 L 12.00 3.16" />
      <path d="M 16.84 7.16 L 18.25 5.75" />
      {children}
    </svg>
  );
});

export default VespilloFleet;
