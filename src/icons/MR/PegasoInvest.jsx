import React from 'react';

export const iconData = {
  "id": "PegasoInvest",
  "name": "PegasoInvest",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 12.71 L 14.14 20.89 L 4.21 16.78 L 5.04 6.07 L 15.49 3.55 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 14.86 L 11.09 18.43 L 5.60 13.12 L 8.96 6.26 L 16.52 7.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.31 14.21 L 10.61 14.88 L 8.83 11.57 L 11.43 8.85 L 14.82 10.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.18 12.33 L 11.74 12.27 L 11.66 11.84 L 12.05 11.63 L 12.37 11.93 Z"
      }
    ]
  ]
};

export const PegasoInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 12.71 L 14.14 20.89 L 4.21 16.78 L 5.04 6.07 L 15.49 3.55 Z" />
      <path d="M 17.83 14.86 L 11.09 18.43 L 5.60 13.12 L 8.96 6.26 L 16.52 7.33 Z" />
      <path d="M 14.31 14.21 L 10.61 14.88 L 8.83 11.57 L 11.43 8.85 L 14.82 10.49 Z" />
      <path d="M 12.18 12.33 L 11.74 12.27 L 11.66 11.84 L 12.05 11.63 L 12.37 11.93 Z" />
      {children}
    </svg>
  );
});

export default PegasoInvest;
