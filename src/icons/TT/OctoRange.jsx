import React from 'react';

export const iconData = {
  "id": "OctoRange",
  "name": "OctoRange",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 9.37 C 12.31 9.68, 11.12 9.83, 16.92 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 8.56 C 10.41 9.38, 9.67 17.26, 18.47 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 7.36 C 13.07 8.62, 10.76 5.01, 14.72 19.11"
      }
    ]
  ]
};

export const OctoRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 9.37 C 12.31 9.68, 11.12 9.83, 16.92 18.96" />
      <path d="M 9.75 8.56 C 10.41 9.38, 9.67 17.26, 18.47 18.16" />
      <path d="M 2.19 7.36 C 13.07 8.62, 10.76 5.01, 14.72 19.11" />
      {children}
    </svg>
  );
});

export default OctoRange;
