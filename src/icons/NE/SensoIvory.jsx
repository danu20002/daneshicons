import React from 'react';

export const iconData = {
  "id": "SensoIvory",
  "name": "SensoIvory",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.57 4.70 C 17.50 8.23, 8.00 10.72, 15.68 14.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 5.73 C 4.08 13.23, 4.62 4.23, 21.26 17.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 2.27 C 7.07 12.50, 14.22 9.86, 18.31 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 4.85 C 8.24 14.48, 7.61 18.63, 18.32 16.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 2.26 C 12.23 10.20, 11.28 4.96, 16.55 15.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 6.80 C 4.55 14.27, 16.76 8.03, 15.03 17.40"
      }
    ]
  ]
};

export const SensoIvory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.57 4.70 C 17.50 8.23, 8.00 10.72, 15.68 14.47" />
      <path d="M 7.36 5.73 C 4.08 13.23, 4.62 4.23, 21.26 17.55" />
      <path d="M 7.02 2.27 C 7.07 12.50, 14.22 9.86, 18.31 14.36" />
      <path d="M 6.07 4.85 C 8.24 14.48, 7.61 18.63, 18.32 16.04" />
      <path d="M 6.61 2.26 C 12.23 10.20, 11.28 4.96, 16.55 15.68" />
      <path d="M 5.81 6.80 C 4.55 14.27, 16.76 8.03, 15.03 17.40" />
      {children}
    </svg>
  );
});

export default SensoIvory;
