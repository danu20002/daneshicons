import React from 'react';

export const iconData = {
  "id": "RapidoJunk",
  "name": "RapidoJunk",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.29 12.00 L 18.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.29 L 12.00 18.71"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 7.30 L 16.70 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 16.70 L 16.70 7.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 9.93 0 1 0 19.86 0 a 9.93 9.93 0 1 0 -19.86 0"
      }
    ]
  ]
};

export const RapidoJunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.29 12.00 L 18.71 12.00" />
      <path d="M 12.00 5.29 L 12.00 18.71" />
      <path d="M 7.30 7.30 L 16.70 16.70" />
      <path d="M 7.30 16.70 L 16.70 7.30" />
      <path d="M 2.07 12.00 a 9.93 9.93 0 1 0 19.86 0 a 9.93 9.93 0 1 0 -19.86 0" />
      {children}
    </svg>
  );
});

export default RapidoJunk;
