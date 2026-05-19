import React from 'react';

export const iconData = {
  "id": "NoctoPsalm",
  "name": "NoctoPsalm",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 7.33 C 12.00 7.07, 7.56 10.82, 16.57 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 7.42 C 18.24 12.46, 17.37 14.24, 18.19 18.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 2.88 C 6.96 14.82, 14.04 10.18, 17.36 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 3.00 C 5.80 19.31, 9.34 10.30, 18.25 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 4.39 C 9.96 4.52, 6.56 6.44, 20.70 16.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 5.68 C 19.16 12.61, 15.18 19.54, 19.32 18.48"
      }
    ]
  ]
};

export const NoctoPsalm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 7.33 C 12.00 7.07, 7.56 10.82, 16.57 14.89" />
      <path d="M 3.46 7.42 C 18.24 12.46, 17.37 14.24, 18.19 18.71" />
      <path d="M 4.36 2.88 C 6.96 14.82, 14.04 10.18, 17.36 15.28" />
      <path d="M 7.39 3.00 C 5.80 19.31, 9.34 10.30, 18.25 17.34" />
      <path d="M 3.63 4.39 C 9.96 4.52, 6.56 6.44, 20.70 16.60" />
      <path d="M 6.04 5.68 C 19.16 12.61, 15.18 19.54, 19.32 18.48" />
      {children}
    </svg>
  );
});

export default NoctoPsalm;
