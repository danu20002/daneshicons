import React from 'react';

export const iconData = {
  "id": "DorsoMaple",
  "name": "DorsoMaple",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.53 16.51 L 4.12 9.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 9.96 L 10.56 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 14.11 3.94 A 2.09 5.24 140 0 0 20.86 15.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 6.26 C 21.82 15.91, 3.51 3.15, 2.88 13.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.35 6.08 A 3.43 6.35 4 0 1 19.81 10.33"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 11.42 C 3.73 3.81, 9.27 5.93, 10.42 11.72"
      }
    ]
  ]
};

export const DorsoMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.53 16.51 L 4.12 9.14" />
      <path d="M 7.01 9.96 L 10.56 18.65" />
      <path d="M 14.11 3.94 A 2.09 5.24 140 0 0 20.86 15.57" />
      <path d="M 9.88 6.26 C 21.82 15.91, 3.51 3.15, 2.88 13.07" />
      <path d="M 12.35 6.08 A 3.43 6.35 4 0 1 19.81 10.33" />
      <path d="M 17.45 11.42 C 3.73 3.81, 9.27 5.93, 10.42 11.72" />
      {children}
    </svg>
  );
});

export default DorsoMaple;
