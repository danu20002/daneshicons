import React from 'react';

export const iconData = {
  "id": "RegulaHerd",
  "name": "RegulaHerd",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.69 12.00 a 9.31 9.31 0 1 0 18.63 0 a 9.31 9.31 0 1 0 -18.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 7.34 a 8.07 2.420010277287378 0 1 0 16.13 0 a 8.07 2.420010277287378 0 1 0 -16.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 12.00 a 9.31 2.794387170067057 0 1 0 18.63 0 a 9.31 2.794387170067057 0 1 0 -18.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 16.66 a 8.07 2.420010277287378 0 1 0 16.13 0 a 8.07 2.420010277287378 0 1 0 -16.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 3.93 A 2 2 0 0 0 16.66 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 3.93 A 2 2 0 0 1 16.66 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 3.93 A 2 2 0 0 0 7.34 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 3.93 A 2 2 0 0 1 7.34 20.07"
      }
    ]
  ]
};

export const RegulaHerd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.69 12.00 a 9.31 9.31 0 1 0 18.63 0 a 9.31 9.31 0 1 0 -18.63 0" />
      <path d="M 3.93 7.34 a 8.07 2.420010277287378 0 1 0 16.13 0 a 8.07 2.420010277287378 0 1 0 -16.13 0" />
      <path d="M 2.69 12.00 a 9.31 2.794387170067057 0 1 0 18.63 0 a 9.31 2.794387170067057 0 1 0 -18.63 0" />
      <path d="M 3.93 16.66 a 8.07 2.420010277287378 0 1 0 16.13 0 a 8.07 2.420010277287378 0 1 0 -16.13 0" />
      <path d="M 16.66 3.93 A 2 2 0 0 0 16.66 20.07" />
      <path d="M 16.66 3.93 A 2 2 0 0 1 16.66 20.07" />
      <path d="M 7.34 3.93 A 2 2 0 0 0 7.34 20.07" />
      <path d="M 7.34 3.93 A 2 2 0 0 1 7.34 20.07" />
      {children}
    </svg>
  );
});

export default RegulaHerd;
