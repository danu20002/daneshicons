import React from 'react';

export const iconData = {
  "id": "UricoJoke",
  "name": "UricoJoke",
  "category": "TZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.09 12.61 L 16.02 20.17 L 6.93 19.57 L 2.91 11.39 L 7.98 3.83 L 17.07 4.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 14.90 L 12.27 18.27 L 6.70 15.37 L 6.43 9.10 L 11.73 5.73 L 17.30 8.63 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.35 14.37 L 11.12 15.22 L 8.77 12.85 L 9.65 9.63 L 12.88 8.78 L 15.23 11.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.27 12.34 L 11.84 12.40 L 11.57 12.06 L 11.73 11.66 L 12.16 11.60 L 12.43 11.94 Z"
      }
    ]
  ]
};

export const UricoJoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.09 12.61 L 16.02 20.17 L 6.93 19.57 L 2.91 11.39 L 7.98 3.83 L 17.07 4.43 Z" />
      <path d="M 17.57 14.90 L 12.27 18.27 L 6.70 15.37 L 6.43 9.10 L 11.73 5.73 L 17.30 8.63 Z" />
      <path d="M 14.35 14.37 L 11.12 15.22 L 8.77 12.85 L 9.65 9.63 L 12.88 8.78 L 15.23 11.15 Z" />
      <path d="M 12.27 12.34 L 11.84 12.40 L 11.57 12.06 L 11.73 11.66 L 12.16 11.60 L 12.43 11.94 Z" />
      {children}
    </svg>
  );
});

export default UricoJoke;
