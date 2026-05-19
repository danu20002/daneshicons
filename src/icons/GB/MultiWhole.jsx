import React from 'react';

export const iconData = {
  "id": "MultiWhole",
  "name": "MultiWhole",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.79 13.79 L 11.81 20.64 L 6.01 7.12 L 14.75 10.63 L 2.37 15.61 L 2.20 20.50 L 4.39 14.45 L 8.10 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.52 10.22 Q 7.22 18.91 16.23 3.11"
      }
    ],
    [
      "path",
      {
        "d": "M 17.58 14.58 A 5.72 3.55 66 0 0 6.74 4.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.78 13.66 A 5.86 4.59 169 0 0 21.27 4.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 12.29 A 4.92 2.22 86 0 1 6.38 20.05"
      }
    ]
  ]
};

export const MultiWhole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.79 13.79 L 11.81 20.64 L 6.01 7.12 L 14.75 10.63 L 2.37 15.61 L 2.20 20.50 L 4.39 14.45 L 8.10 3.38" />
      <path d="M 11.52 10.22 Q 7.22 18.91 16.23 3.11" />
      <path d="M 17.58 14.58 A 5.72 3.55 66 0 0 6.74 4.94" />
      <path d="M 10.78 13.66 A 5.86 4.59 169 0 0 21.27 4.76" />
      <path d="M 7.46 12.29 A 4.92 2.22 86 0 1 6.38 20.05" />
      {children}
    </svg>
  );
});

export default MultiWhole;
