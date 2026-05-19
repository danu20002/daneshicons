import React from 'react';

export const iconData = {
  "id": "VegliaTend",
  "name": "VegliaTend",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.86 21.31 L 17.90 4.85"
      }
    ],
    [
      "path",
      {
        "d": "M 15.78 13.38 A 3.03 3.98 98 0 1 8.84 3.35"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 3.87 L 16.45 11.10 L 8.17 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.36 4.73 Q 12.26 14.78 6.39 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 8.85 L 10.59 15.12"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 3.79 A 2.55 6.44 120 0 0 13.43 2.08"
      }
    ]
  ]
};

export const VegliaTend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.86 21.31 L 17.90 4.85" />
      <path d="M 15.78 13.38 A 3.03 3.98 98 0 1 8.84 3.35" />
      <path d="M 19.15 3.87 L 16.45 11.10 L 8.17 17.42" />
      <path d="M 17.36 4.73 Q 12.26 14.78 6.39 5.28" />
      <path d="M 6.93 8.85 L 10.59 15.12" />
      <path d="M 4.00 3.79 A 2.55 6.44 120 0 0 13.43 2.08" />
      {children}
    </svg>
  );
});

export default VegliaTend;
