import React from 'react';

export const iconData = {
  "id": "TrasfigRumor",
  "name": "TrasfigRumor",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.09 4.11 C 13.94 5.85, 17.31 5.92, 18.72 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 7.94 C 17.78 11.06, 8.76 18.26, 21.50 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 2.58 4.13 C 18.76 6.65, 17.87 15.20, 20.75 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 7.64 C 12.30 19.18, 14.82 7.45, 21.67 17.75"
      }
    ]
  ]
};

export const TrasfigRumor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.09 4.11 C 13.94 5.85, 17.31 5.92, 18.72 20.68" />
      <path d="M 3.49 7.94 C 17.78 11.06, 8.76 18.26, 21.50 19.50" />
      <path d="M 2.58 4.13 C 18.76 6.65, 17.87 15.20, 20.75 17.91" />
      <path d="M 8.32 7.64 C 12.30 19.18, 14.82 7.45, 21.67 17.75" />
      {children}
    </svg>
  );
});

export default TrasfigRumor;
