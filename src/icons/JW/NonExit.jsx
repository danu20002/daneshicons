import React from 'react';

export const iconData = {
  "id": "NonExit",
  "name": "NonExit",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 9.47 0 1 0 18.95 0 a 9.47 9.47 0 1 0 -18.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 7.26 a 8.21 2.461640683652903 0 1 0 16.41 0 a 8.21 2.461640683652903 0 1 0 -16.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 2.8424578227102755 0 1 0 18.95 0 a 9.47 2.8424578227102755 0 1 0 -18.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 16.74 a 8.21 2.461640683652903 0 1 0 16.41 0 a 8.21 2.461640683652903 0 1 0 -16.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.53 A 2 2 0 0 0 12.00 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.53 A 2 2 0 0 1 12.00 21.47"
      }
    ]
  ]
};

export const NonExit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.53 12.00 a 9.47 9.47 0 1 0 18.95 0 a 9.47 9.47 0 1 0 -18.95 0" />
      <path d="M 3.79 7.26 a 8.21 2.461640683652903 0 1 0 16.41 0 a 8.21 2.461640683652903 0 1 0 -16.41 0" />
      <path d="M 2.53 12.00 a 9.47 2.8424578227102755 0 1 0 18.95 0 a 9.47 2.8424578227102755 0 1 0 -18.95 0" />
      <path d="M 3.79 16.74 a 8.21 2.461640683652903 0 1 0 16.41 0 a 8.21 2.461640683652903 0 1 0 -16.41 0" />
      <path d="M 12.00 2.53 A 2 2 0 0 0 12.00 21.47" />
      <path d="M 12.00 2.53 A 2 2 0 0 1 12.00 21.47" />
      {children}
    </svg>
  );
});

export default NonExit;
