import React from 'react';

export const iconData = {
  "id": "LavaScorn",
  "name": "LavaScorn",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.07 11.90 C 19.46 15.39, 14.92 9.10, 2.21 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 2.21 A 3.28 2.99 141 0 1 4.15 19.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 8.86 L 17.00 17.38 L 2.70 8.75 L 11.29 17.05 L 21.45 19.63 L 19.49 7.59 L 5.89 20.70 L 16.83 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 15.58 L 10.67 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 21.58 L 2.72 7.50 L 7.02 16.63 L 18.80 17.02 L 11.28 19.87"
      }
    ]
  ]
};

export const LavaScorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.07 11.90 C 19.46 15.39, 14.92 9.10, 2.21 10.92" />
      <path d="M 18.87 2.21 A 3.28 2.99 141 0 1 4.15 19.10" />
      <path d="M 4.16 8.86 L 17.00 17.38 L 2.70 8.75 L 11.29 17.05 L 21.45 19.63 L 19.49 7.59 L 5.89 20.70 L 16.83 20.73" />
      <path d="M 6.88 15.58 L 10.67 21.48" />
      <path d="M 9.75 21.58 L 2.72 7.50 L 7.02 16.63 L 18.80 17.02 L 11.28 19.87" />
      {children}
    </svg>
  );
});

export default LavaScorn;
