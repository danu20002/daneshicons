import React from 'react';

export const iconData = {
  "id": "MedioEquator",
  "name": "MedioEquator",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 8.70 L 15.03 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 14.37 9.52 L 16.37 12.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 12.81 L 13.34 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.97 15.30 L 8.97 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.63 14.48 L 7.63 11.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 11.19 L 10.66 7.72"
      }
    ]
  ]
};

export const MedioEquator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 8.70 L 15.03 8.70" />
      <path d="M 14.37 9.52 L 16.37 12.98" />
      <path d="M 15.34 12.81 L 13.34 16.28" />
      <path d="M 12.97 15.30 L 8.97 15.30" />
      <path d="M 9.63 14.48 L 7.63 11.02" />
      <path d="M 8.66 11.19 L 10.66 7.72" />
      {children}
    </svg>
  );
});

export default MedioEquator;
