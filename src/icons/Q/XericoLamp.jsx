import React from 'react';

export const iconData = {
  "id": "XericoLamp",
  "name": "XericoLamp",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 7.93 a 7.05 2.116289091298612 0 1 0 14.11 0 a 7.05 2.116289091298612 0 1 0 -14.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 2.443680153088644 0 1 0 16.29 0 a 8.15 2.443680153088644 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 16.07 a 7.05 2.116289091298612 0 1 0 14.11 0 a 7.05 2.116289091298612 0 1 0 -14.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.85 A 2 2 0 0 0 12.00 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.85 A 2 2 0 0 1 12.00 20.15"
      }
    ]
  ]
};

export const XericoLamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0" />
      <path d="M 4.95 7.93 a 7.05 2.116289091298612 0 1 0 14.11 0 a 7.05 2.116289091298612 0 1 0 -14.11 0" />
      <path d="M 3.85 12.00 a 8.15 2.443680153088644 0 1 0 16.29 0 a 8.15 2.443680153088644 0 1 0 -16.29 0" />
      <path d="M 4.95 16.07 a 7.05 2.116289091298612 0 1 0 14.11 0 a 7.05 2.116289091298612 0 1 0 -14.11 0" />
      <path d="M 12.00 3.85 A 2 2 0 0 0 12.00 20.15" />
      <path d="M 12.00 3.85 A 2 2 0 0 1 12.00 20.15" />
      {children}
    </svg>
  );
});

export default XericoLamp;
