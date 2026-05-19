import React from 'react';

export const iconData = {
  "id": "LysoGuest",
  "name": "LysoGuest",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 12.00 a 2.15 2.15 0 1 0 4.30 0 a 2.15 2.15 0 1 0 -4.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 12.00 a 3.91 3.91 0 1 0 7.81 0 a 3.91 3.91 0 1 0 -7.81 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ]
  ]
};

export const LysoGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 12.00 a 2.15 2.15 0 1 0 4.30 0 a 2.15 2.15 0 1 0 -4.30 0" />
      <path d="M 8.09 12.00 a 3.91 3.91 0 1 0 7.81 0 a 3.91 3.91 0 1 0 -7.81 0" stroke-dasharray="5 2" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0" />
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0" />
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      {children}
    </svg>
  );
});

export default LysoGuest;
