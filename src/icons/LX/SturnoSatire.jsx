import React from 'react';

export const iconData = {
  "id": "SturnoSatire",
  "name": "SturnoSatire",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.15 6.43 Q 7.49 12.68 13.83 2.33"
      }
    ],
    [
      "path",
      {
        "d": "M 2.22 5.59 A 3.98 4.25 96 0 0 17.16 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.92 17.98 C 14.24 11.10, 17.73 7.74, 13.91 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.21 21.63 Q 18.62 8.10 8.29 14.94"
      }
    ]
  ]
};

export const SturnoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.15 6.43 Q 7.49 12.68 13.83 2.33" />
      <path d="M 2.22 5.59 A 3.98 4.25 96 0 0 17.16 18.95" />
      <path d="M 13.92 17.98 C 14.24 11.10, 17.73 7.74, 13.91 5.54" />
      <path d="M 15.21 21.63 Q 18.62 8.10 8.29 14.94" />
      {children}
    </svg>
  );
});

export default SturnoSatire;
