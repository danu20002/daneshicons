import React from 'react';

export const iconData = {
  "id": "CoeloHelm",
  "name": "CoeloHelm",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.35 5.29 C 8.55 14.28, 10.85 12.14, 18.42 14.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.49 6.93 C 12.45 5.05, 6.47 14.03, 21.95 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 3.21 C 13.20 14.06, 10.02 5.24, 21.55 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 5.02 C 6.09 4.84, 9.25 4.62, 17.94 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 3.56 C 5.96 12.33, 9.02 8.52, 21.18 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 6.02 C 5.26 19.05, 17.20 9.86, 18.99 17.06"
      }
    ]
  ]
};

export const CoeloHelm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.35 5.29 C 8.55 14.28, 10.85 12.14, 18.42 14.47" />
      <path d="M 7.49 6.93 C 12.45 5.05, 6.47 14.03, 21.95 16.56" />
      <path d="M 3.43 3.21 C 13.20 14.06, 10.02 5.24, 21.55 14.84" />
      <path d="M 3.83 5.02 C 6.09 4.84, 9.25 4.62, 17.94 20.56" />
      <path d="M 8.27 3.56 C 5.96 12.33, 9.02 8.52, 21.18 14.45" />
      <path d="M 9.09 6.02 C 5.26 19.05, 17.20 9.86, 18.99 17.06" />
      {children}
    </svg>
  );
});

export default CoeloHelm;
