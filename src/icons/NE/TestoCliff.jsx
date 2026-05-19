import React from 'react';

export const iconData = {
  "id": "TestoCliff",
  "name": "TestoCliff",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 4.95 C 5.03 16.03, 9.33 5.25, 18.98 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 2.67 7.87 C 13.12 5.59, 19.60 5.31, 14.64 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 7.60 C 12.05 14.25, 16.54 11.73, 19.43 18.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 5.83 C 12.51 17.33, 8.60 16.66, 21.86 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 7.82 C 19.52 13.57, 18.98 13.11, 14.45 15.75"
      }
    ]
  ]
};

export const TestoCliff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 4.95 C 5.03 16.03, 9.33 5.25, 18.98 14.45" />
      <path d="M 2.67 7.87 C 13.12 5.59, 19.60 5.31, 14.64 19.13" />
      <path d="M 5.34 7.60 C 12.05 14.25, 16.54 11.73, 19.43 18.42" />
      <path d="M 6.92 5.83 C 12.51 17.33, 8.60 16.66, 21.86 14.92" />
      <path d="M 9.96 7.82 C 19.52 13.57, 18.98 13.11, 14.45 15.75" />
      {children}
    </svg>
  );
});

export default TestoCliff;
