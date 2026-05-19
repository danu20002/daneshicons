import React from 'react';

export const iconData = {
  "id": "VietatoMend",
  "name": "VietatoMend",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.07 0 a 2.04 2.04 0 1 0 -4.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 12.00 a 3.98 3.98 0 1 0 7.96 0 a 3.98 3.98 0 1 0 -7.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 12.00 a 5.56 5.56 0 1 0 11.11 0 a 5.56 5.56 0 1 0 -11.11 0",
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
        "d": "M 3.36 12.00 a 8.64 8.64 0 1 0 17.28 0 a 8.64 8.64 0 1 0 -17.28 0"
      }
    ]
  ]
};

export const VietatoMend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.07 0 a 2.04 2.04 0 1 0 -4.07 0" />
      <path d="M 8.02 12.00 a 3.98 3.98 0 1 0 7.96 0 a 3.98 3.98 0 1 0 -7.96 0" />
      <path d="M 6.44 12.00 a 5.56 5.56 0 1 0 11.11 0 a 5.56 5.56 0 1 0 -11.11 0" stroke-dasharray="4 1" />
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0" />
      <path d="M 3.36 12.00 a 8.64 8.64 0 1 0 17.28 0 a 8.64 8.64 0 1 0 -17.28 0" />
      {children}
    </svg>
  );
});

export default VietatoMend;
