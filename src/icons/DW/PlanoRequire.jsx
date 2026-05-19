import React from 'react';

export const iconData = {
  "id": "PlanoRequire",
  "name": "PlanoRequire",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.01 21.03 A 5.77 3.29 16 0 0 15.40 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.47 12.07 L 5.19 10.99 L 3.19 7.92 L 14.42 7.60 L 13.52 9.44 L 16.76 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 17.58 L 17.08 3.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 19.72 L 4.21 9.25"
      }
    ]
  ]
};

export const PlanoRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.01 21.03 A 5.77 3.29 16 0 0 15.40 5.72" />
      <path d="M 12.47 12.07 L 5.19 10.99 L 3.19 7.92 L 14.42 7.60 L 13.52 9.44 L 16.76 15.76" />
      <path d="M 6.45 17.58 L 17.08 3.04" />
      <path d="M 7.59 19.72 L 4.21 9.25" />
      {children}
    </svg>
  );
});

export default PlanoRequire;
