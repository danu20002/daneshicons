import React from 'react';

export const iconData = {
  "id": "NaturaLatitude",
  "name": "NaturaLatitude",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.48 5.43 C 8.16 7.91, 16.00 9.49, 15.47 15.62"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 3.81 C 6.16 9.31, 13.78 13.66, 21.85 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 4.84 C 4.36 9.66, 19.31 5.92, 17.11 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 5.82 C 9.23 5.68, 18.62 6.57, 21.02 17.59"
      }
    ]
  ]
};

export const NaturaLatitude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.48 5.43 C 8.16 7.91, 16.00 9.49, 15.47 15.62" />
      <path d="M 2.13 3.81 C 6.16 9.31, 13.78 13.66, 21.85 20.50" />
      <path d="M 5.90 4.84 C 4.36 9.66, 19.31 5.92, 17.11 14.82" />
      <path d="M 8.61 5.82 C 9.23 5.68, 18.62 6.57, 21.02 17.59" />
      {children}
    </svg>
  );
});

export default NaturaLatitude;
