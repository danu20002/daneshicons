import React from 'react';

export const iconData = {
  "id": "PhagoSpot",
  "name": "PhagoSpot",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.16 10.26 L 14.16 10.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.08 9.71 L 14.32 13.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.51 12.32 L 11.27 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.47 14.49 L 9.23 12.14"
      }
    ],
    [
      "path",
      {
        "d": "M 9.78 13.21 L 11.02 9.41"
      }
    ]
  ]
};

export const PhagoSpot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.16 10.26 L 14.16 10.26" />
      <path d="M 13.08 9.71 L 14.32 13.52" />
      <path d="M 14.51 12.32 L 11.27 14.67" />
      <path d="M 12.47 14.49 L 9.23 12.14" />
      <path d="M 9.78 13.21 L 11.02 9.41" />
      {children}
    </svg>
  );
});

export default PhagoSpot;
