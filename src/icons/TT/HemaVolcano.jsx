import React from 'react';

export const iconData = {
  "id": "HemaVolcano",
  "name": "HemaVolcano",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 5.15 C 11.15 19.56, 10.81 10.02, 19.87 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 9.16 C 11.65 13.90, 6.43 11.79, 16.67 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 9.85 C 12.78 13.32, 12.70 5.90, 21.96 19.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 9.86 C 9.84 14.18, 15.05 13.25, 19.79 16.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 9.92 C 11.10 13.93, 7.36 10.13, 19.33 15.05"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 7.69 C 6.80 9.69, 7.51 17.29, 18.32 20.02"
      }
    ]
  ]
};

export const HemaVolcano = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 5.15 C 11.15 19.56, 10.81 10.02, 19.87 18.06" />
      <path d="M 2.88 9.16 C 11.65 13.90, 6.43 11.79, 16.67 19.51" />
      <path d="M 3.32 9.85 C 12.78 13.32, 12.70 5.90, 21.96 19.00" />
      <path d="M 6.74 9.86 C 9.84 14.18, 15.05 13.25, 19.79 16.04" />
      <path d="M 9.26 9.92 C 11.10 13.93, 7.36 10.13, 19.33 15.05" />
      <path d="M 3.25 7.69 C 6.80 9.69, 7.51 17.29, 18.32 20.02" />
      {children}
    </svg>
  );
});

export default HemaVolcano;
