import React from 'react';

export const iconData = {
  "id": "ZambelloOsmosis",
  "name": "ZambelloOsmosis",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 12.00 a 3.68 3.68 0 1 0 7.35 0 a 3.68 3.68 0 1 0 -7.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 12.00 a 5.42 5.42 0 1 0 10.85 0 a 5.42 5.42 0 1 0 -10.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ]
  ]
};

export const ZambelloOsmosis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 8.32 12.00 a 3.68 3.68 0 1 0 7.35 0 a 3.68 3.68 0 1 0 -7.35 0" />
      <path d="M 6.58 12.00 a 5.42 5.42 0 1 0 10.85 0 a 5.42 5.42 0 1 0 -10.85 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0" />
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      {children}
    </svg>
  );
});

export default ZambelloOsmosis;
