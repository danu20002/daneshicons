import React from 'react';

export const iconData = {
  "id": "SphingoSix",
  "name": "SphingoSix",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.85 12.00 a 7.15 7.15 0 1 0 14.30 0 a 7.15 7.15 0 1 0 -14.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 12.00 a 4.29 4.29 0 1 1 8.59 0 a 4.29 4.29 0 1 1 -8.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 12.00 L 20.65 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 17.76 L 16.33 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 17.76 L 7.67 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 12.00 L 3.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 6.24 L 7.67 4.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 6.24 L 16.33 4.51"
      }
    ]
  ]
};

export const SphingoSix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.85 12.00 a 7.15 7.15 0 1 0 14.30 0 a 7.15 7.15 0 1 0 -14.30 0" />
      <path d="M 7.71 12.00 a 4.29 4.29 0 1 1 8.59 0 a 4.29 4.29 0 1 1 -8.59 0" />
      <path d="M 18.65 12.00 L 20.65 12.00" />
      <path d="M 15.33 17.76 L 16.33 19.49" />
      <path d="M 8.67 17.76 L 7.67 19.49" />
      <path d="M 5.35 12.00 L 3.35 12.00" />
      <path d="M 8.67 6.24 L 7.67 4.51" />
      <path d="M 15.33 6.24 L 16.33 4.51" />
      {children}
    </svg>
  );
});

export default SphingoSix;
