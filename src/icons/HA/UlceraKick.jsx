import React from 'react';

export const iconData = {
  "id": "UlceraKick",
  "name": "UlceraKick",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 12.00 a 6.05 6.05 0 1 1 12.10 0 a 6.05 6.05 0 1 1 -12.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 12.00 L 22.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.31 17.29 L 19.84 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 20.11 L 13.78 22.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 19.13 L 6.88 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 14.82 L 2.38 15.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 9.18 L 2.38 8.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 L 6.88 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 3.89 L 13.78 1.92"
      }
    ],
    [
      "path",
      {
        "d": "M 18.31 6.71 L 19.84 5.42"
      }
    ]
  ]
};

export const UlceraKick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0" />
      <path d="M 5.95 12.00 a 6.05 6.05 0 1 1 12.10 0 a 6.05 6.05 0 1 1 -12.10 0" />
      <path d="M 20.24 12.00 L 22.24 12.00" />
      <path d="M 18.31 17.29 L 19.84 18.58" />
      <path d="M 13.43 20.11 L 13.78 22.08" />
      <path d="M 7.88 19.13 L 6.88 20.86" />
      <path d="M 4.26 14.82 L 2.38 15.50" />
      <path d="M 4.26 9.18 L 2.38 8.50" />
      <path d="M 7.88 4.87 L 6.88 3.14" />
      <path d="M 13.43 3.89 L 13.78 1.92" />
      <path d="M 18.31 6.71 L 19.84 5.42" />
      {children}
    </svg>
  );
});

export default UlceraKick;
