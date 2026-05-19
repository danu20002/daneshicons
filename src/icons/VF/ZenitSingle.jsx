import React from 'react';

export const iconData = {
  "id": "ZenitSingle",
  "name": "ZenitSingle",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.11 6.29 C 10.51 19.79, 8.07 15.93, 15.44 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 9.28 C 9.12 13.55, 15.21 6.57, 14.50 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 5.15 C 14.05 17.50, 14.61 9.15, 18.07 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 3.96 C 9.39 15.69, 5.10 14.63, 17.21 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 7.79 C 14.07 16.58, 15.87 12.91, 14.77 15.66"
      }
    ]
  ]
};

export const ZenitSingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.11 6.29 C 10.51 19.79, 8.07 15.93, 15.44 19.93" />
      <path d="M 9.48 9.28 C 9.12 13.55, 15.21 6.57, 14.50 14.90" />
      <path d="M 8.20 5.15 C 14.05 17.50, 14.61 9.15, 18.07 14.09" />
      <path d="M 8.01 3.96 C 9.39 15.69, 5.10 14.63, 17.21 19.03" />
      <path d="M 7.41 7.79 C 14.07 16.58, 15.87 12.91, 14.77 15.66" />
      {children}
    </svg>
  );
});

export default ZenitSingle;
