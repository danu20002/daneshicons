import React from 'react';

export const iconData = {
  "id": "PeriWind",
  "name": "PeriWind",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 4.44 C 11.98 11.65, 18.65 7.67, 18.90 17.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 2.82 C 6.63 17.61, 13.26 14.84, 17.83 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 4.12 C 14.29 18.20, 15.24 10.23, 21.64 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 8.34 C 16.11 5.26, 11.51 16.08, 19.72 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 7.32 C 9.30 14.93, 14.80 5.20, 21.49 18.03"
      }
    ]
  ]
};

export const PeriWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 4.44 C 11.98 11.65, 18.65 7.67, 18.90 17.74" />
      <path d="M 5.08 2.82 C 6.63 17.61, 13.26 14.84, 17.83 15.35" />
      <path d="M 7.64 4.12 C 14.29 18.20, 15.24 10.23, 21.64 15.93" />
      <path d="M 8.64 8.34 C 16.11 5.26, 11.51 16.08, 19.72 20.75" />
      <path d="M 2.49 7.32 C 9.30 14.93, 14.80 5.20, 21.49 18.03" />
      {children}
    </svg>
  );
});

export default PeriWind;
