import React from 'react';

export const iconData = {
  "id": "MetaTrot",
  "name": "MetaTrot",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.36 4.06 C 11.25 8.30, 8.80 9.71, 19.15 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 3.56 C 9.79 14.01, 4.93 6.36, 21.43 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 3.98 C 6.13 11.18, 9.65 9.04, 21.05 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 5.45 C 5.17 15.08, 17.98 19.29, 16.43 17.51"
      }
    ]
  ]
};

export const MetaTrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.36 4.06 C 11.25 8.30, 8.80 9.71, 19.15 21.80" />
      <path d="M 7.51 3.56 C 9.79 14.01, 4.93 6.36, 21.43 18.28" />
      <path d="M 2.55 3.98 C 6.13 11.18, 9.65 9.04, 21.05 14.70" />
      <path d="M 3.00 5.45 C 5.17 15.08, 17.98 19.29, 16.43 17.51" />
      {children}
    </svg>
  );
});

export default MetaTrot;
