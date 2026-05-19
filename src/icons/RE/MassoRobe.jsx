import React from 'react';

export const iconData = {
  "id": "MassoRobe",
  "name": "MassoRobe",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 7.82 a 7.24 2.171336943106112 0 1 0 14.48 0 a 7.24 2.171336943106112 0 1 0 -14.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 2.507243937207386 0 1 0 16.71 0 a 8.36 2.507243937207386 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 16.18 a 7.24 2.171336943106112 0 1 0 14.48 0 a 7.24 2.171336943106112 0 1 0 -14.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.64 A 2 2 0 0 0 12.00 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.64 A 2 2 0 0 1 12.00 20.36"
      }
    ]
  ]
};

export const MassoRobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0" />
      <path d="M 4.76 7.82 a 7.24 2.171336943106112 0 1 0 14.48 0 a 7.24 2.171336943106112 0 1 0 -14.48 0" />
      <path d="M 3.64 12.00 a 8.36 2.507243937207386 0 1 0 16.71 0 a 8.36 2.507243937207386 0 1 0 -16.71 0" />
      <path d="M 4.76 16.18 a 7.24 2.171336943106112 0 1 0 14.48 0 a 7.24 2.171336943106112 0 1 0 -14.48 0" />
      <path d="M 12.00 3.64 A 2 2 0 0 0 12.00 20.36" />
      <path d="M 12.00 3.64 A 2 2 0 0 1 12.00 20.36" />
      {children}
    </svg>
  );
});

export default MassoRobe;
