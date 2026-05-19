import React from 'react';

export const iconData = {
  "id": "VertigoNeon",
  "name": "VertigoNeon",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 8.35 0 1 0 16.71 0 a 8.35 8.35 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 2.506065653404221 0 1 0 16.71 0 a 8.35 2.506065653404221 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.18 4.77 A 2 2 0 0 0 16.18 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 16.18 4.77 A 2 2 0 0 1 16.18 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 4.77 A 2 2 0 0 0 7.82 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 4.77 A 2 2 0 0 1 7.82 19.23"
      }
    ]
  ]
};

export const VertigoNeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 12.00 a 8.35 8.35 0 1 0 16.71 0 a 8.35 8.35 0 1 0 -16.71 0" />
      <path d="M 3.65 12.00 a 8.35 2.506065653404221 0 1 0 16.71 0 a 8.35 2.506065653404221 0 1 0 -16.71 0" />
      <path d="M 16.18 4.77 A 2 2 0 0 0 16.18 19.23" />
      <path d="M 16.18 4.77 A 2 2 0 0 1 16.18 19.23" />
      <path d="M 7.82 4.77 A 2 2 0 0 0 7.82 19.23" />
      <path d="M 7.82 4.77 A 2 2 0 0 1 7.82 19.23" />
      {children}
    </svg>
  );
});

export default VertigoNeon;
