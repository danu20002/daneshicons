import React from 'react';

export const iconData = {
  "id": "SimulPoint",
  "name": "SimulPoint",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.89 0 a 8.45 8.45 0 1 0 -16.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 a 6.93 6.93 0 1 1 13.86 0 a 6.93 6.93 0 1 1 -13.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 12.00 L 21.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 18.88 L 16.97 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 18.88 L 7.03 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 12.00 L 2.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 5.12 L 7.03 3.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 5.12 L 16.97 3.39"
      }
    ]
  ]
};

export const SimulPoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.89 0 a 8.45 8.45 0 1 0 -16.89 0" />
      <path d="M 5.07 12.00 a 6.93 6.93 0 1 1 13.86 0 a 6.93 6.93 0 1 1 -13.86 0" />
      <path d="M 19.95 12.00 L 21.95 12.00" />
      <path d="M 15.97 18.88 L 16.97 20.61" />
      <path d="M 8.03 18.88 L 7.03 20.61" />
      <path d="M 4.05 12.00 L 2.05 12.00" />
      <path d="M 8.03 5.12 L 7.03 3.39" />
      <path d="M 15.97 5.12 L 16.97 3.39" />
      {children}
    </svg>
  );
});

export default SimulPoint;
