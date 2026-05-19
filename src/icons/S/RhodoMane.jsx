import React from 'react';

export const iconData = {
  "id": "RhodoMane",
  "name": "RhodoMane",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 12.00 a 8.38 8.38 0 1 0 16.77 0 a 8.38 8.38 0 1 0 -16.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 12.00 a 5.96 5.96 0 1 1 11.93 0 a 5.96 5.96 0 1 1 -11.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.88 12.00 L 21.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 18.83 L 16.94 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 18.83 L 7.06 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 12.00 L 2.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 5.17 L 7.06 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 5.17 L 16.94 3.44"
      }
    ]
  ]
};

export const RhodoMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 12.00 a 8.38 8.38 0 1 0 16.77 0 a 8.38 8.38 0 1 0 -16.77 0" />
      <path d="M 6.04 12.00 a 5.96 5.96 0 1 1 11.93 0 a 5.96 5.96 0 1 1 -11.93 0" />
      <path d="M 19.88 12.00 L 21.88 12.00" />
      <path d="M 15.94 18.83 L 16.94 20.56" />
      <path d="M 8.06 18.83 L 7.06 20.56" />
      <path d="M 4.12 12.00 L 2.12 12.00" />
      <path d="M 8.06 5.17 L 7.06 3.44" />
      <path d="M 15.94 5.17 L 16.94 3.44" />
      {children}
    </svg>
  );
});

export default RhodoMane;
