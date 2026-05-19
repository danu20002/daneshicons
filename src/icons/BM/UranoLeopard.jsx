import React from 'react';

export const iconData = {
  "id": "UranoLeopard",
  "name": "UranoLeopard",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.55 2.60 C 7.22 11.61, 7.17 12.89, 19.66 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 9.83 C 7.42 19.75, 15.90 16.18, 16.69 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 4.10 C 10.67 9.20, 18.41 13.07, 16.31 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 9.17 C 4.73 16.07, 14.95 16.14, 19.00 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 8.83 C 7.34 7.71, 7.06 14.97, 18.62 20.03"
      }
    ]
  ]
};

export const UranoLeopard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.55 2.60 C 7.22 11.61, 7.17 12.89, 19.66 14.89" />
      <path d="M 5.72 9.83 C 7.42 19.75, 15.90 16.18, 16.69 19.40" />
      <path d="M 9.90 4.10 C 10.67 9.20, 18.41 13.07, 16.31 18.49" />
      <path d="M 6.19 9.17 C 4.73 16.07, 14.95 16.14, 19.00 20.39" />
      <path d="M 3.71 8.83 C 7.34 7.71, 7.06 14.97, 18.62 20.03" />
      {children}
    </svg>
  );
});

export default UranoLeopard;
