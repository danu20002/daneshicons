import React from 'react';

export const iconData = {
  "id": "LeptoLike",
  "name": "LeptoLike",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.05 6.72 C 19.11 11.23, 17.26 5.12, 18.33 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.00 3.55 C 16.28 14.28, 10.37 11.44, 14.36 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.94 2.58 C 17.20 13.81, 6.05 11.12, 20.18 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 6.02 C 6.87 6.16, 5.58 16.19, 15.18 14.50"
      }
    ]
  ]
};

export const LeptoLike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.05 6.72 C 19.11 11.23, 17.26 5.12, 18.33 18.81" />
      <path d="M 2.00 3.55 C 16.28 14.28, 10.37 11.44, 14.36 21.02" />
      <path d="M 8.94 2.58 C 17.20 13.81, 6.05 11.12, 20.18 19.44" />
      <path d="M 9.61 6.02 C 6.87 6.16, 5.58 16.19, 15.18 14.50" />
      {children}
    </svg>
  );
});

export default LeptoLike;
