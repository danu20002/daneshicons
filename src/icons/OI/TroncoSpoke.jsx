import React from 'react';

export const iconData = {
  "id": "TroncoSpoke",
  "name": "TroncoSpoke",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 12.00 a 8.20 8.20 0 1 0 16.39 0 a 8.20 8.20 0 1 0 -16.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 12.00 a 5.65 5.65 0 1 1 11.30 0 a 5.65 5.65 0 1 1 -11.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 12.00 L 21.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 18.67 L 16.85 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 18.67 L 7.15 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 12.00 L 2.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 5.33 L 7.15 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 5.33 L 16.85 3.60"
      }
    ]
  ]
};

export const TroncoSpoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 12.00 a 8.20 8.20 0 1 0 16.39 0 a 8.20 8.20 0 1 0 -16.39 0" />
      <path d="M 6.35 12.00 a 5.65 5.65 0 1 1 11.30 0 a 5.65 5.65 0 1 1 -11.30 0" />
      <path d="M 19.70 12.00 L 21.70 12.00" />
      <path d="M 15.85 18.67 L 16.85 20.40" />
      <path d="M 8.15 18.67 L 7.15 20.40" />
      <path d="M 4.30 12.00 L 2.30 12.00" />
      <path d="M 8.15 5.33 L 7.15 3.60" />
      <path d="M 15.85 5.33 L 16.85 3.60" />
      {children}
    </svg>
  );
});

export default TroncoSpoke;
