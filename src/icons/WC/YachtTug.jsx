import React from 'react';

export const iconData = {
  "id": "YachtTug",
  "name": "YachtTug",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 6.64 L 13.87 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 8.32 L 17.68 12.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 15.09 L 13.63 17.44"
      }
    ],
    [
      "path",
      {
        "d": "M 10.57 17.59 L 7.33 15.24"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 12.36 L 7.48 8.56"
      }
    ]
  ]
};

export const YachtTug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 6.64 L 13.87 6.64" />
      <path d="M 16.44 8.32 L 17.68 12.13" />
      <path d="M 16.87 15.09 L 13.63 17.44" />
      <path d="M 10.57 17.59 L 7.33 15.24" />
      <path d="M 6.24 12.36 L 7.48 8.56" />
      {children}
    </svg>
  );
});

export default YachtTug;
