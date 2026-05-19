import React from 'react';

export const iconData = {
  "id": "MorphoBloom",
  "name": "MorphoBloom",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 12.00 a 5.49 5.49 0 1 1 10.98 0 a 5.49 5.49 0 1 1 -10.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 12.00 L 21.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 18.19 L 18.18 19.75"
      }
    ],
    [
      "path",
      {
        "d": "M 10.24 19.72 L 9.79 21.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 15.44 L 3.06 16.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 8.56 L 3.06 7.70"
      }
    ],
    [
      "path",
      {
        "d": "M 10.24 4.28 L 9.79 2.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 5.81 L 18.18 4.25"
      }
    ]
  ]
};

export const MorphoBloom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      <path d="M 6.51 12.00 a 5.49 5.49 0 1 1 10.98 0 a 5.49 5.49 0 1 1 -10.98 0" />
      <path d="M 19.92 12.00 L 21.92 12.00" />
      <path d="M 16.94 18.19 L 18.18 19.75" />
      <path d="M 10.24 19.72 L 9.79 21.67" />
      <path d="M 4.87 15.44 L 3.06 16.30" />
      <path d="M 4.87 8.56 L 3.06 7.70" />
      <path d="M 10.24 4.28 L 9.79 2.33" />
      <path d="M 16.94 5.81 L 18.18 4.25" />
      {children}
    </svg>
  );
});

export default MorphoBloom;
