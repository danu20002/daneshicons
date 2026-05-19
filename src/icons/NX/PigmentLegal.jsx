import React from 'react';

export const iconData = {
  "id": "PigmentLegal",
  "name": "PigmentLegal",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.60 5.02 C 19.94 10.84, 12.34 10.24, 15.65 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 9.12 8.15 C 12.95 13.55, 9.45 13.68, 18.52 15.31"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 2.22 C 5.04 9.00, 4.54 9.34, 15.73 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 8.75 C 4.01 13.78, 8.84 17.18, 19.24 19.98"
      }
    ]
  ]
};

export const PigmentLegal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.60 5.02 C 19.94 10.84, 12.34 10.24, 15.65 20.15" />
      <path d="M 9.12 8.15 C 12.95 13.55, 9.45 13.68, 18.52 15.31" />
      <path d="M 2.85 2.22 C 5.04 9.00, 4.54 9.34, 15.73 21.82" />
      <path d="M 8.71 8.75 C 4.01 13.78, 8.84 17.18, 19.24 19.98" />
      {children}
    </svg>
  );
});

export default PigmentLegal;
