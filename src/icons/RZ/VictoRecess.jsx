import React from 'react';

export const iconData = {
  "id": "VictoRecess",
  "name": "VictoRecess",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 12.00 L 22.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.46 17.42 L 19.99 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 20.30 L 13.81 22.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 19.30 L 6.79 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 14.88 L 2.20 15.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 9.12 L 2.20 8.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 4.70 L 6.79 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 3.70 L 13.81 1.73"
      }
    ],
    [
      "path",
      {
        "d": "M 18.46 6.58 L 19.99 5.30"
      }
    ]
  ]
};

export const VictoRecess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0" />
      <path d="M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0" />
      <path d="M 20.43 12.00 L 22.43 12.00" />
      <path d="M 18.46 17.42 L 19.99 18.70" />
      <path d="M 13.46 20.30 L 13.81 22.27" />
      <path d="M 7.79 19.30 L 6.79 21.03" />
      <path d="M 4.08 14.88 L 2.20 15.57" />
      <path d="M 4.08 9.12 L 2.20 8.43" />
      <path d="M 7.79 4.70 L 6.79 2.97" />
      <path d="M 13.46 3.70 L 13.81 1.73" />
      <path d="M 18.46 6.58 L 19.99 5.30" />
      {children}
    </svg>
  );
});

export default VictoRecess;
