import React from 'react';

export const iconData = {
  "id": "MoleculoIon",
  "name": "MoleculoIon",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.88 10.55 L 14.88 10.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.69 10.30 L 14.69 13.77"
      }
    ],
    [
      "path",
      {
        "d": "M 13.82 11.75 L 11.82 15.21"
      }
    ],
    [
      "path",
      {
        "d": "M 13.12 13.45 L 9.12 13.45"
      }
    ],
    [
      "path",
      {
        "d": "M 11.31 13.70 L 9.31 10.23"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 12.25 L 12.18 8.79"
      }
    ]
  ]
};

export const MoleculoIon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.88 10.55 L 14.88 10.55" />
      <path d="M 12.69 10.30 L 14.69 13.77" />
      <path d="M 13.82 11.75 L 11.82 15.21" />
      <path d="M 13.12 13.45 L 9.12 13.45" />
      <path d="M 11.31 13.70 L 9.31 10.23" />
      <path d="M 10.18 12.25 L 12.18 8.79" />
      {children}
    </svg>
  );
});

export default MoleculoIon;
