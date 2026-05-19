import React from 'react';

export const iconData = {
  "id": "RevolPriest",
  "name": "RevolPriest",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.92 A 2.99 6.16 166 0 1 14.00 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 10.84 3.86 Q 9.47 7.16 8.85 4.13"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 2.64 A 3.15 6.61 37 0 1 3.62 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 9.57 L 7.86 2.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 5.57 L 9.88 2.75 L 7.59 7.51 L 15.48 18.79 L 10.24 19.04 L 18.42 12.55 L 16.27 11.72 L 15.81 20.18"
      }
    ]
  ]
};

export const RevolPriest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.92 A 2.99 6.16 166 0 1 14.00 19.54" />
      <path d="M 10.84 3.86 Q 9.47 7.16 8.85 4.13" />
      <path d="M 17.24 2.64 A 3.15 6.61 37 0 1 3.62 3.60" />
      <path d="M 7.75 9.57 L 7.86 2.90" />
      <path d="M 6.03 5.57 L 9.88 2.75 L 7.59 7.51 L 15.48 18.79 L 10.24 19.04 L 18.42 12.55 L 16.27 11.72 L 15.81 20.18" />
      {children}
    </svg>
  );
});

export default RevolPriest;
