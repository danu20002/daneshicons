import React from 'react';

export const iconData = {
  "id": "PaleoMeasure",
  "name": "PaleoMeasure",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 21.41 L 20.54 6.96 L 9.77 11.32 L 6.09 3.79 L 12.51 13.20 L 19.84 13.38 L 21.10 11.96 L 17.24 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 18.55 15.10 C 19.18 21.18, 15.42 18.09, 8.85 18.85"
      }
    ],
    [
      "path",
      {
        "d": "M 14.12 3.62 L 11.17 8.08 L 8.09 10.23 L 3.44 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 21.23 15.35 Q 14.61 18.03 9.40 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 19.89 C 12.74 7.65, 13.53 12.04, 17.57 14.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 18.13 C 12.27 12.21, 13.35 12.75, 8.72 14.22"
      }
    ]
  ]
};

export const PaleoMeasure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 21.41 L 20.54 6.96 L 9.77 11.32 L 6.09 3.79 L 12.51 13.20 L 19.84 13.38 L 21.10 11.96 L 17.24 2.54" />
      <path d="M 18.55 15.10 C 19.18 21.18, 15.42 18.09, 8.85 18.85" />
      <path d="M 14.12 3.62 L 11.17 8.08 L 8.09 10.23 L 3.44 17.78" />
      <path d="M 21.23 15.35 Q 14.61 18.03 9.40 4.30" />
      <path d="M 13.21 19.89 C 12.74 7.65, 13.53 12.04, 17.57 14.26" />
      <path d="M 6.36 18.13 C 12.27 12.21, 13.35 12.75, 8.72 14.22" />
      {children}
    </svg>
  );
});

export default PaleoMeasure;
