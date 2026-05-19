import React from 'react';

export const iconData = {
  "id": "ZittinoRung",
  "name": "ZittinoRung",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.68 10.61 C 9.69 18.02, 16.34 15.56, 17.35 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 9.81 C 8.92 12.19, 9.18 5.47, 6.05 4.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.97 18.45 L 10.92 8.53"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 7.51 A 6.01 6.06 135 0 1 3.10 15.11"
      }
    ]
  ]
};

export const ZittinoRung = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.68 10.61 C 9.69 18.02, 16.34 15.56, 17.35 4.49" />
      <path d="M 7.60 9.81 C 8.92 12.19, 9.18 5.47, 6.05 4.28" />
      <path d="M 12.97 18.45 L 10.92 8.53" />
      <path d="M 20.06 7.51 A 6.01 6.06 135 0 1 3.10 15.11" />
      {children}
    </svg>
  );
});

export default ZittinoRung;
