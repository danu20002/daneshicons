import React from 'react';

export const iconData = {
  "id": "LiquidoScrub",
  "name": "LiquidoScrub",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 2.25 C 8.79 8.17, 7.13 17.61, 20.11 19.29"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 9.27 C 7.42 12.74, 11.19 7.58, 15.77 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 8.52 C 19.92 11.36, 11.74 4.23, 16.77 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 7.12 C 8.49 5.31, 15.18 12.98, 18.26 15.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 6.60 C 9.23 13.89, 10.26 5.72, 16.87 21.13"
      }
    ]
  ]
};

export const LiquidoScrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 2.25 C 8.79 8.17, 7.13 17.61, 20.11 19.29" />
      <path d="M 5.30 9.27 C 7.42 12.74, 11.19 7.58, 15.77 19.20" />
      <path d="M 4.82 8.52 C 19.92 11.36, 11.74 4.23, 16.77 16.72" />
      <path d="M 7.62 7.12 C 8.49 5.31, 15.18 12.98, 18.26 15.64" />
      <path d="M 8.05 6.60 C 9.23 13.89, 10.26 5.72, 16.87 21.13" />
      {children}
    </svg>
  );
});

export default LiquidoScrub;
