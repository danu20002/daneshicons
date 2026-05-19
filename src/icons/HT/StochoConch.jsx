import React from 'react';

export const iconData = {
  "id": "StochoConch",
  "name": "StochoConch",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 12.00 a 7.74 7.74 0 1 0 15.48 0 a 7.74 7.74 0 1 0 -15.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 12.00 a 5.03 5.03 0 1 1 10.06 0 a 5.03 5.03 0 1 1 -10.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.24 12.00 L 21.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 16.65 L 19.08 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 19.13 L 13.60 21.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 18.27 L 7.38 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 14.48 L 3.32 15.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 9.52 L 3.32 8.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 5.73 L 7.38 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 4.87 L 13.60 2.90"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 7.35 L 19.08 6.06"
      }
    ]
  ]
};

export const StochoConch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 12.00 a 7.74 7.74 0 1 0 15.48 0 a 7.74 7.74 0 1 0 -15.48 0" />
      <path d="M 6.97 12.00 a 5.03 5.03 0 1 1 10.06 0 a 5.03 5.03 0 1 1 -10.06 0" />
      <path d="M 19.24 12.00 L 21.24 12.00" />
      <path d="M 17.55 16.65 L 19.08 17.94" />
      <path d="M 13.26 19.13 L 13.60 21.10" />
      <path d="M 8.38 18.27 L 7.38 20.00" />
      <path d="M 5.20 14.48 L 3.32 15.16" />
      <path d="M 5.20 9.52 L 3.32 8.84" />
      <path d="M 8.38 5.73 L 7.38 4.00" />
      <path d="M 13.26 4.87 L 13.60 2.90" />
      <path d="M 17.55 7.35 L 19.08 6.06" />
      {children}
    </svg>
  );
});

export default StochoConch;
