import React from 'react';

export const iconData = {
  "id": "JubiloSpirit",
  "name": "JubiloSpirit",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.00 a 5.38 5.38 0 1 1 10.75 0 a 5.38 5.38 0 1 1 -10.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 12.00 L 21.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 17.16 L 18.57 18.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.29 L 12.00 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 17.16 L 5.43 18.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 12.00 L 2.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 6.84 L 5.43 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.71 L 12.00 2.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 6.84 L 18.57 5.43"
      }
    ]
  ]
};

export const JubiloSpirit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0" />
      <path d="M 6.62 12.00 a 5.38 5.38 0 1 1 10.75 0 a 5.38 5.38 0 1 1 -10.75 0" />
      <path d="M 19.29 12.00 L 21.29 12.00" />
      <path d="M 17.16 17.16 L 18.57 18.57" />
      <path d="M 12.00 19.29 L 12.00 21.29" />
      <path d="M 6.84 17.16 L 5.43 18.57" />
      <path d="M 4.71 12.00 L 2.71 12.00" />
      <path d="M 6.84 6.84 L 5.43 5.43" />
      <path d="M 12.00 4.71 L 12.00 2.71" />
      <path d="M 17.16 6.84 L 18.57 5.43" />
      {children}
    </svg>
  );
});

export default JubiloSpirit;
