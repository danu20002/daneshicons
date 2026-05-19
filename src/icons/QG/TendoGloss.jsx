import React from 'react';

export const iconData = {
  "id": "TendoGloss",
  "name": "TendoGloss",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 12.00 L 19.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.93 L 12.00 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 7.05 L 16.95 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 16.95 L 16.95 7.05"
      }
    ],
    [
      "path",
      {
        "d": "M 1.78 12.00 a 10.22 10.22 0 1 0 20.45 0 a 10.22 10.22 0 1 0 -20.45 0"
      }
    ]
  ]
};

export const TendoGloss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 12.00 L 19.07 12.00" />
      <path d="M 12.00 4.93 L 12.00 19.07" />
      <path d="M 7.05 7.05 L 16.95 16.95" />
      <path d="M 7.05 16.95 L 16.95 7.05" />
      <path d="M 1.78 12.00 a 10.22 10.22 0 1 0 20.45 0 a 10.22 10.22 0 1 0 -20.45 0" />
      {children}
    </svg>
  );
});

export default TendoGloss;
