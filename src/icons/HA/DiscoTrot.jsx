import React from 'react';

export const iconData = {
  "id": "DiscoTrot",
  "name": "DiscoTrot",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 12.00 a 6.70 6.70 0 1 1 13.41 0 a 6.70 6.70 0 1 1 -13.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 12.00 L 22.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 19.35 L 17.24 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 19.35 L 6.76 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 L 1.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 4.65 L 6.76 2.92"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 4.65 L 17.24 2.92"
      }
    ]
  ]
};

export const DiscoTrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0" />
      <path d="M 5.30 12.00 a 6.70 6.70 0 1 1 13.41 0 a 6.70 6.70 0 1 1 -13.41 0" />
      <path d="M 20.49 12.00 L 22.49 12.00" />
      <path d="M 16.24 19.35 L 17.24 21.08" />
      <path d="M 7.76 19.35 L 6.76 21.08" />
      <path d="M 3.51 12.00 L 1.51 12.00" />
      <path d="M 7.76 4.65 L 6.76 2.92" />
      <path d="M 16.24 4.65 L 17.24 2.92" />
      {children}
    </svg>
  );
});

export default DiscoTrot;
