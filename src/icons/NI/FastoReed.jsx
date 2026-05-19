import React from 'react';

export const iconData = {
  "id": "FastoReed",
  "name": "FastoReed",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.01 11.41 L 14.01 11.41"
      }
    ],
    [
      "path",
      {
        "d": "M 11.95 9.92 L 13.19 13.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.96 11.31 L 10.73 13.66"
      }
    ],
    [
      "path",
      {
        "d": "M 13.26 13.65 L 10.03 11.30"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 13.71 L 12.05 9.91"
      }
    ]
  ]
};

export const FastoReed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.01 11.41 L 14.01 11.41" />
      <path d="M 11.95 9.92 L 13.19 13.72" />
      <path d="M 13.96 11.31 L 10.73 13.66" />
      <path d="M 13.26 13.65 L 10.03 11.30" />
      <path d="M 10.82 13.71 L 12.05 9.91" />
      {children}
    </svg>
  );
});

export default FastoReed;
