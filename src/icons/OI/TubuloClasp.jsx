import React from 'react';

export const iconData = {
  "id": "TubuloClasp",
  "name": "TubuloClasp",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.33 0 a 7.66 7.66 0 1 0 -15.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 a 4.93 4.93 0 1 1 9.85 0 a 4.93 4.93 0 1 1 -9.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 12.00 L 21.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.47 17.60 L 17.71 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.98 L 9.96 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 15.11 L 3.74 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 8.89 L 3.74 8.02"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.02 L 9.96 3.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.47 6.40 L 17.71 4.84"
      }
    ]
  ]
};

export const TubuloClasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.33 0 a 7.66 7.66 0 1 0 -15.33 0" />
      <path d="M 7.07 12.00 a 4.93 4.93 0 1 1 9.85 0 a 4.93 4.93 0 1 1 -9.85 0" />
      <path d="M 19.16 12.00 L 21.16 12.00" />
      <path d="M 16.47 17.60 L 17.71 19.16" />
      <path d="M 10.41 18.98 L 9.96 20.93" />
      <path d="M 5.55 15.11 L 3.74 15.98" />
      <path d="M 5.55 8.89 L 3.74 8.02" />
      <path d="M 10.41 5.02 L 9.96 3.07" />
      <path d="M 16.47 6.40 L 17.71 4.84" />
      {children}
    </svg>
  );
});

export default TubuloClasp;
