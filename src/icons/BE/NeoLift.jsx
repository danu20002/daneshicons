import React from 'react';

export const iconData = {
  "id": "NeoLift",
  "name": "NeoLift",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 12.00 a 5.49 5.49 0 1 1 10.99 0 a 5.49 5.49 0 1 1 -10.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 12.00 L 21.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 18.57 L 16.79 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 18.57 L 7.21 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 12.00 L 2.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 5.43 L 7.21 3.70"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 5.43 L 16.79 3.70"
      }
    ]
  ]
};

export const NeoLift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0" />
      <path d="M 6.51 12.00 a 5.49 5.49 0 1 1 10.99 0 a 5.49 5.49 0 1 1 -10.99 0" />
      <path d="M 19.58 12.00 L 21.58 12.00" />
      <path d="M 15.79 18.57 L 16.79 20.30" />
      <path d="M 8.21 18.57 L 7.21 20.30" />
      <path d="M 4.42 12.00 L 2.42 12.00" />
      <path d="M 8.21 5.43 L 7.21 3.70" />
      <path d="M 15.79 5.43 L 16.79 3.70" />
      {children}
    </svg>
  );
});

export default NeoLift;
