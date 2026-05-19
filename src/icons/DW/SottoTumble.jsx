import React from 'react';

export const iconData = {
  "id": "SottoTumble",
  "name": "SottoTumble",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.97 18.45 L 18.90 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 8.84 L 10.22 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 13.85 21.34 A 3.95 2.57 91 0 0 9.69 21.00"
      }
    ]
  ]
};

export const SottoTumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.97 18.45 L 18.90 15.71" />
      <path d="M 4.03 8.84 L 10.22 6.64" />
      <path d="M 13.85 21.34 A 3.95 2.57 91 0 0 9.69 21.00" />
      {children}
    </svg>
  );
});

export default SottoTumble;
