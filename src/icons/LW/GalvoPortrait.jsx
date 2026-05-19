import React from 'react';

export const iconData = {
  "id": "GalvoPortrait",
  "name": "GalvoPortrait",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 11.36 L 10.45 11.36"
      }
    ],
    [
      "path",
      {
        "d": "M 9.78 6.87 L 11.78 10.33"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 7.51 L 13.34 10.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 12.64 L 13.55 12.64"
      }
    ],
    [
      "path",
      {
        "d": "M 14.22 17.13 L 12.22 13.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 16.49 L 10.66 13.02"
      }
    ]
  ]
};

export const GalvoPortrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 11.36 L 10.45 11.36" />
      <path d="M 9.78 6.87 L 11.78 10.33" />
      <path d="M 15.34 7.51 L 13.34 10.98" />
      <path d="M 17.55 12.64 L 13.55 12.64" />
      <path d="M 14.22 17.13 L 12.22 13.67" />
      <path d="M 8.66 16.49 L 10.66 13.02" />
      {children}
    </svg>
  );
});

export default GalvoPortrait;
