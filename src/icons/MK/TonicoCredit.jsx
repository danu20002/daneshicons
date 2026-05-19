import React from 'react';

export const iconData = {
  "id": "TonicoCredit",
  "name": "TonicoCredit",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 12.00 a 3.95 3.95 0 1 0 7.91 0 a 3.95 3.95 0 1 0 -7.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 0 13.89 0 a 6.95 6.95 0 1 0 -13.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0"
      }
    ]
  ]
};

export const TonicoCredit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0" stroke-dasharray="2 1" />
      <path d="M 8.05 12.00 a 3.95 3.95 0 1 0 7.91 0 a 3.95 3.95 0 1 0 -7.91 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 0 13.89 0 a 6.95 6.95 0 1 0 -13.89 0" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" />
      {children}
    </svg>
  );
});

export default TonicoCredit;
