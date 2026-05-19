import React from 'react';

export const iconData = {
  "id": "SpacioMine",
  "name": "SpacioMine",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.55 11.04 L 14.55 11.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 10.26 L 14.11 13.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.56 11.22 L 11.56 14.69"
      }
    ],
    [
      "path",
      {
        "d": "M 13.45 12.96 L 9.45 12.96"
      }
    ],
    [
      "path",
      {
        "d": "M 11.89 13.74 L 9.89 10.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.44 12.78 L 12.44 9.31"
      }
    ]
  ]
};

export const SpacioMine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.55 11.04 L 14.55 11.04" />
      <path d="M 12.11 10.26 L 14.11 13.72" />
      <path d="M 13.56 11.22 L 11.56 14.69" />
      <path d="M 13.45 12.96 L 9.45 12.96" />
      <path d="M 11.89 13.74 L 9.89 10.28" />
      <path d="M 10.44 12.78 L 12.44 9.31" />
      {children}
    </svg>
  );
});

export default SpacioMine;
