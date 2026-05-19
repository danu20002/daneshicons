import React from 'react';

export const iconData = {
  "id": "LysoPlasma",
  "name": "LysoPlasma",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.91 0 a 8.45 8.45 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 7.77 a 7.32 2.1966062584854265 0 1 0 14.64 0 a 7.32 2.1966062584854265 0 1 0 -14.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 2.5364224292803557 0 1 0 16.91 0 a 8.45 2.5364224292803557 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 16.23 a 7.32 2.1966062584854265 0 1 0 14.64 0 a 7.32 2.1966062584854265 0 1 0 -14.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.55 A 2 2 0 0 0 12.00 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.55 A 2 2 0 0 1 12.00 20.45"
      }
    ]
  ]
};

export const LysoPlasma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.91 0 a 8.45 8.45 0 1 0 -16.91 0" />
      <path d="M 4.68 7.77 a 7.32 2.1966062584854265 0 1 0 14.64 0 a 7.32 2.1966062584854265 0 1 0 -14.64 0" />
      <path d="M 3.55 12.00 a 8.45 2.5364224292803557 0 1 0 16.91 0 a 8.45 2.5364224292803557 0 1 0 -16.91 0" />
      <path d="M 4.68 16.23 a 7.32 2.1966062584854265 0 1 0 14.64 0 a 7.32 2.1966062584854265 0 1 0 -14.64 0" />
      <path d="M 12.00 3.55 A 2 2 0 0 0 12.00 20.45" />
      <path d="M 12.00 3.55 A 2 2 0 0 1 12.00 20.45" />
      {children}
    </svg>
  );
});

export default LysoPlasma;
