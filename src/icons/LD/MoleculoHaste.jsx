import React from 'react';

export const iconData = {
  "id": "MoleculoHaste",
  "name": "MoleculoHaste",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.43 10.82 L 11.43 10.82"
      }
    ],
    [
      "path",
      {
        "d": "M 10.74 7.46 L 12.74 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 8.64 L 13.31 12.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 13.18 L 12.57 13.18"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 16.54 L 11.26 13.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 15.36 L 10.69 11.90"
      }
    ]
  ]
};

export const MoleculoHaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.43 10.82 L 11.43 10.82" />
      <path d="M 10.74 7.46 L 12.74 10.92" />
      <path d="M 15.31 8.64 L 13.31 12.10" />
      <path d="M 16.57 13.18 L 12.57 13.18" />
      <path d="M 13.26 16.54 L 11.26 13.08" />
      <path d="M 8.69 15.36 L 10.69 11.90" />
      {children}
    </svg>
  );
});

export default MoleculoHaste;
