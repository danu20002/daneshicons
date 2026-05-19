import React from 'react';

export const iconData = {
  "id": "UmbroTake",
  "name": "UmbroTake",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 7.59 a 7.64 2.2909155493811757 0 1 0 15.27 0 a 7.64 2.2909155493811757 0 1 0 -15.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 2.645321418251842 0 1 0 17.64 0 a 8.82 2.645321418251842 0 1 0 -17.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 16.41 a 7.64 2.2909155493811757 0 1 0 15.27 0 a 7.64 2.2909155493811757 0 1 0 -15.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 4.36 A 2 2 0 0 0 16.41 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 4.36 A 2 2 0 0 1 16.41 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 4.36 A 2 2 0 0 0 7.59 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 4.36 A 2 2 0 0 1 7.59 19.64"
      }
    ]
  ]
};

export const UmbroTake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0" />
      <path d="M 4.36 7.59 a 7.64 2.2909155493811757 0 1 0 15.27 0 a 7.64 2.2909155493811757 0 1 0 -15.27 0" />
      <path d="M 3.18 12.00 a 8.82 2.645321418251842 0 1 0 17.64 0 a 8.82 2.645321418251842 0 1 0 -17.64 0" />
      <path d="M 4.36 16.41 a 7.64 2.2909155493811757 0 1 0 15.27 0 a 7.64 2.2909155493811757 0 1 0 -15.27 0" />
      <path d="M 16.41 4.36 A 2 2 0 0 0 16.41 19.64" />
      <path d="M 16.41 4.36 A 2 2 0 0 1 16.41 19.64" />
      <path d="M 7.59 4.36 A 2 2 0 0 0 7.59 19.64" />
      <path d="M 7.59 4.36 A 2 2 0 0 1 7.59 19.64" />
      {children}
    </svg>
  );
});

export default UmbroTake;
