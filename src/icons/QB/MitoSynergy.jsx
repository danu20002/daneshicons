import React from 'react';

export const iconData = {
  "id": "MitoSynergy",
  "name": "MitoSynergy",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 0 9.81 0 a 4.90 4.90 0 1 0 -9.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0"
      }
    ]
  ]
};

export const MitoSynergy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0" stroke-dasharray="6 3" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 0 9.81 0 a 4.90 4.90 0 1 0 -9.81 0" />
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0" />
      {children}
    </svg>
  );
});

export default MitoSynergy;
