import React from 'react';

export const iconData = {
  "id": "YachtContour",
  "name": "YachtContour",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.84 3.20 C 9.47 11.78, 14.99 14.33, 18.60 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 9.24 C 17.62 12.59, 17.92 6.11, 18.32 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 5.59 C 9.85 4.74, 4.95 14.10, 19.95 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 9.03 C 18.23 4.04, 8.74 15.27, 15.49 14.16"
      }
    ]
  ]
};

export const YachtContour = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.84 3.20 C 9.47 11.78, 14.99 14.33, 18.60 18.90" />
      <path d="M 4.02 9.24 C 17.62 12.59, 17.92 6.11, 18.32 14.38" />
      <path d="M 7.74 5.59 C 9.85 4.74, 4.95 14.10, 19.95 21.86" />
      <path d="M 6.24 9.03 C 18.23 4.04, 8.74 15.27, 15.49 14.16" />
      {children}
    </svg>
  );
});

export default YachtContour;
