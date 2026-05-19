import React from 'react';

export const iconData = {
  "id": "SemiWeed",
  "name": "SemiWeed",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 12.00 a 2.27 2.27 0 1 0 4.55 0 a 2.27 2.27 0 1 0 -4.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 12.00 a 4.16 4.16 0 1 0 8.32 0 a 4.16 4.16 0 1 0 -8.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 12.00 a 6.34 6.34 0 1 0 12.68 0 a 6.34 6.34 0 1 0 -12.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.17 0 a 8.09 8.09 0 1 0 -16.17 0"
      }
    ]
  ]
};

export const SemiWeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 12.00 a 2.27 2.27 0 1 0 4.55 0 a 2.27 2.27 0 1 0 -4.55 0" />
      <path d="M 7.84 12.00 a 4.16 4.16 0 1 0 8.32 0 a 4.16 4.16 0 1 0 -8.32 0" />
      <path d="M 5.66 12.00 a 6.34 6.34 0 1 0 12.68 0 a 6.34 6.34 0 1 0 -12.68 0" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.17 0 a 8.09 8.09 0 1 0 -16.17 0" />
      {children}
    </svg>
  );
});

export default SemiWeed;
