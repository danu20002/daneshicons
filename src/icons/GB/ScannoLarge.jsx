import React from 'react';

export const iconData = {
  "id": "ScannoLarge",
  "name": "ScannoLarge",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 17.71 L 13.21 9.10 L 13.07 5.36 L 11.14 20.87 L 21.04 20.54 L 13.96 13.28"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 16.83 L 10.07 13.43 L 15.38 12.99 L 10.29 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 13.08 16.51 Q 20.53 4.58 10.22 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 13.74 12.06 Q 5.42 7.23 10.30 7.36"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 15.13 Q 19.90 2.40 6.06 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 17.19 L 3.44 17.44"
      }
    ]
  ]
};

export const ScannoLarge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 17.71 L 13.21 9.10 L 13.07 5.36 L 11.14 20.87 L 21.04 20.54 L 13.96 13.28" />
      <path d="M 2.74 16.83 L 10.07 13.43 L 15.38 12.99 L 10.29 4.38" />
      <path d="M 13.08 16.51 Q 20.53 4.58 10.22 6.32" />
      <path d="M 13.74 12.06 Q 5.42 7.23 10.30 7.36" />
      <path d="M 15.09 15.13 Q 19.90 2.40 6.06 15.30" />
      <path d="M 16.77 17.19 L 3.44 17.44" />
      {children}
    </svg>
  );
});

export default ScannoLarge;
