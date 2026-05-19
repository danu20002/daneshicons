import React from 'react';

export const iconData = {
  "id": "TrigonBuffer",
  "name": "TrigonBuffer",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.09 0 a 2.04 2.04 0 1 0 -4.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 0 11.25 0 a 5.62 5.62 0 1 0 -11.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0"
      }
    ]
  ]
};

export const TrigonBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.09 0 a 2.04 2.04 0 1 0 -4.09 0" />
      <path d="M 8.30 12.00 a 3.70 3.70 0 1 0 7.40 0 a 3.70 3.70 0 1 0 -7.40 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 0 11.25 0 a 5.62 5.62 0 1 0 -11.25 0" />
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0" />
      {children}
    </svg>
  );
});

export default TrigonBuffer;
