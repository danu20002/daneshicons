import React from 'react';

export const iconData = {
  "id": "ChronoOften",
  "name": "ChronoOften",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 7.85 C 17.93 4.61, 10.23 12.01, 16.50 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 6.82 C 7.94 11.71, 14.17 17.43, 17.40 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 4.95 C 19.26 10.33, 18.57 11.34, 21.15 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 8.56 C 8.64 7.05, 7.75 8.20, 19.64 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 4.39 C 5.70 19.04, 9.29 8.32, 16.29 18.00"
      }
    ]
  ]
};

export const ChronoOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 7.85 C 17.93 4.61, 10.23 12.01, 16.50 21.17" />
      <path d="M 3.14 6.82 C 7.94 11.71, 14.17 17.43, 17.40 20.55" />
      <path d="M 8.95 4.95 C 19.26 10.33, 18.57 11.34, 21.15 16.35" />
      <path d="M 8.75 8.56 C 8.64 7.05, 7.75 8.20, 19.64 17.16" />
      <path d="M 6.89 4.39 C 5.70 19.04, 9.29 8.32, 16.29 18.00" />
      {children}
    </svg>
  );
});

export default ChronoOften;
