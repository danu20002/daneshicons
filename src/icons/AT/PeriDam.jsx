import React from 'react';

export const iconData = {
  "id": "PeriDam",
  "name": "PeriDam",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.11 8.16 C 16.15 8.64, 11.85 9.78, 17.37 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 6.52 C 11.26 13.53, 10.88 5.66, 16.59 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 5.72 C 11.88 6.93, 10.38 6.34, 20.75 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 4.72 C 13.17 13.38, 19.55 14.24, 15.74 14.57"
      }
    ]
  ]
};

export const PeriDam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.11 8.16 C 16.15 8.64, 11.85 9.78, 17.37 21.78" />
      <path d="M 7.45 6.52 C 11.26 13.53, 10.88 5.66, 16.59 17.62" />
      <path d="M 7.85 5.72 C 11.88 6.93, 10.38 6.34, 20.75 21.28" />
      <path d="M 4.87 4.72 C 13.17 13.38, 19.55 14.24, 15.74 14.57" />
      {children}
    </svg>
  );
});

export default PeriDam;
