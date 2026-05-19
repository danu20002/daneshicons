import React from 'react';

export const iconData = {
  "id": "PentaGleam",
  "name": "PentaGleam",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 12.00 a 3.94 3.94 0 1 0 7.89 0 a 3.94 3.94 0 1 0 -7.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.19 0 a 8.60 8.60 0 1 0 -17.19 0"
      }
    ]
  ]
};

export const PentaGleam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0" />
      <path d="M 8.06 12.00 a 3.94 3.94 0 1 0 7.89 0 a 3.94 3.94 0 1 0 -7.89 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0" stroke-dasharray="4 1" />
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0" />
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.19 0 a 8.60 8.60 0 1 0 -17.19 0" />
      {children}
    </svg>
  );
});

export default PentaGleam;
