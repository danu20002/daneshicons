import React from 'react';

export const iconData = {
  "id": "VincoloLab",
  "name": "VincoloLab",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 9.23 0 1 0 18.46 0 a 9.23 9.23 0 1 0 -18.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 8.92 a 8.70 2.6101851930753766 0 1 0 17.40 0 a 8.70 2.6101851930753766 0 1 0 -17.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 15.08 a 8.70 2.6101851930753766 0 1 0 17.40 0 a 8.70 2.6101851930753766 0 1 0 -17.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 4.01 A 2 2 0 0 0 16.61 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 4.01 A 2 2 0 0 1 16.61 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 4.01 A 2 2 0 0 0 7.39 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 4.01 A 2 2 0 0 1 7.39 19.99"
      }
    ]
  ]
};

export const VincoloLab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 12.00 a 9.23 9.23 0 1 0 18.46 0 a 9.23 9.23 0 1 0 -18.46 0" />
      <path d="M 3.30 8.92 a 8.70 2.6101851930753766 0 1 0 17.40 0 a 8.70 2.6101851930753766 0 1 0 -17.40 0" />
      <path d="M 3.30 15.08 a 8.70 2.6101851930753766 0 1 0 17.40 0 a 8.70 2.6101851930753766 0 1 0 -17.40 0" />
      <path d="M 16.61 4.01 A 2 2 0 0 0 16.61 19.99" />
      <path d="M 16.61 4.01 A 2 2 0 0 1 16.61 19.99" />
      <path d="M 7.39 4.01 A 2 2 0 0 0 7.39 19.99" />
      <path d="M 7.39 4.01 A 2 2 0 0 1 7.39 19.99" />
      {children}
    </svg>
  );
});

export default VincoloLab;
