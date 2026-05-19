import React from 'react';

export const iconData = {
  "id": "MobiloRelief",
  "name": "MobiloRelief",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0"
      }
    ]
  ]
};

export const MobiloRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0" stroke-dasharray="6 3" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0" />
      <path d="M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0" />
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0" />
      {children}
    </svg>
  );
});

export default MobiloRelief;
