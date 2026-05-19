import React from 'react';

export const iconData = {
  "id": "TipoClaw",
  "name": "TipoClaw",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.72 6.75 C 7.82 11.39, 9.46 18.79, 19.83 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 2.59 C 12.62 8.89, 9.43 10.50, 15.15 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 9.29 C 4.25 15.12, 9.44 14.61, 14.85 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 4.46 C 15.39 15.52, 11.98 12.47, 17.60 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 5.96 C 7.54 11.80, 8.59 15.84, 15.52 15.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 3.14 C 13.60 10.29, 5.05 4.70, 15.45 20.51"
      }
    ]
  ]
};

export const TipoClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.72 6.75 C 7.82 11.39, 9.46 18.79, 19.83 14.36" />
      <path d="M 7.54 2.59 C 12.62 8.89, 9.43 10.50, 15.15 17.47" />
      <path d="M 4.36 9.29 C 4.25 15.12, 9.44 14.61, 14.85 19.47" />
      <path d="M 9.94 4.46 C 15.39 15.52, 11.98 12.47, 17.60 14.08" />
      <path d="M 7.02 5.96 C 7.54 11.80, 8.59 15.84, 15.52 15.80" />
      <path d="M 9.26 3.14 C 13.60 10.29, 5.05 4.70, 15.45 20.51" />
      {children}
    </svg>
  );
});

export default TipoClaw;
