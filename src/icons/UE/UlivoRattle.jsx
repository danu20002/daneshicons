import React from 'react';

export const iconData = {
  "id": "UlivoRattle",
  "name": "UlivoRattle",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 12.00 a 6.55 6.55 0 1 1 13.11 0 a 6.55 6.55 0 1 1 -13.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 12.00 L 22.10 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 19.02 L 17.05 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 19.02 L 6.95 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 L 1.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 4.98 L 6.95 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 4.98 L 17.05 3.25"
      }
    ]
  ]
};

export const UlivoRattle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0" />
      <path d="M 5.45 12.00 a 6.55 6.55 0 1 1 13.11 0 a 6.55 6.55 0 1 1 -13.11 0" />
      <path d="M 20.10 12.00 L 22.10 12.00" />
      <path d="M 16.05 19.02 L 17.05 20.75" />
      <path d="M 7.95 19.02 L 6.95 20.75" />
      <path d="M 3.90 12.00 L 1.90 12.00" />
      <path d="M 7.95 4.98 L 6.95 3.25" />
      <path d="M 16.05 4.98 L 17.05 3.25" />
      {children}
    </svg>
  );
});

export default UlivoRattle;
