import React from 'react';

export const iconData = {
  "id": "LunaDrier",
  "name": "LunaDrier",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.53 8.22 C 18.30 6.88, 9.73 18.56, 20.48 15.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 2.49 C 4.60 12.43, 14.34 18.39, 18.54 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 2.38 2.40 C 10.96 17.67, 16.97 12.42, 21.50 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 3.69 C 5.33 7.87, 17.31 10.58, 14.26 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 2.35 C 15.12 19.88, 7.54 8.61, 20.29 18.94"
      }
    ]
  ]
};

export const LunaDrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.53 8.22 C 18.30 6.88, 9.73 18.56, 20.48 15.80" />
      <path d="M 7.90 2.49 C 4.60 12.43, 14.34 18.39, 18.54 18.92" />
      <path d="M 2.38 2.40 C 10.96 17.67, 16.97 12.42, 21.50 21.03" />
      <path d="M 2.70 3.69 C 5.33 7.87, 17.31 10.58, 14.26 20.99" />
      <path d="M 9.92 2.35 C 15.12 19.88, 7.54 8.61, 20.29 18.94" />
      {children}
    </svg>
  );
});

export default LunaDrier;
