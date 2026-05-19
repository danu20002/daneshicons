import React from 'react';

export const iconData = {
  "id": "BioCattle",
  "name": "BioCattle",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.15 3.25 C 11.12 14.40, 9.16 16.17, 16.00 14.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 9.67 C 13.38 19.76, 15.42 15.31, 17.90 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 7.55 C 12.66 10.41, 15.17 14.59, 17.13 16.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 5.45 C 6.40 5.35, 7.36 10.57, 16.11 16.72"
      }
    ]
  ]
};

export const BioCattle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.15 3.25 C 11.12 14.40, 9.16 16.17, 16.00 14.29" />
      <path d="M 6.61 9.67 C 13.38 19.76, 15.42 15.31, 17.90 21.06" />
      <path d="M 6.13 7.55 C 12.66 10.41, 15.17 14.59, 17.13 16.53" />
      <path d="M 4.85 5.45 C 6.40 5.35, 7.36 10.57, 16.11 16.72" />
      {children}
    </svg>
  );
});

export default BioCattle;
