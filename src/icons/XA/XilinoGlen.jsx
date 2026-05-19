import React from 'react';

export const iconData = {
  "id": "XilinoGlen",
  "name": "XilinoGlen",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 9.16 a 8.03 2.4093159567335283 0 1 0 16.06 0 a 8.03 2.4093159567335283 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 14.84 a 8.03 2.4093159567335283 0 1 0 16.06 0 a 8.03 2.4093159567335283 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.48 A 2 2 0 0 0 12.00 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.48 A 2 2 0 0 1 12.00 20.52"
      }
    ]
  ]
};

export const XilinoGlen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0" />
      <path d="M 3.97 9.16 a 8.03 2.4093159567335283 0 1 0 16.06 0 a 8.03 2.4093159567335283 0 1 0 -16.06 0" />
      <path d="M 3.97 14.84 a 8.03 2.4093159567335283 0 1 0 16.06 0 a 8.03 2.4093159567335283 0 1 0 -16.06 0" />
      <path d="M 12.00 3.48 A 2 2 0 0 0 12.00 20.52" />
      <path d="M 12.00 3.48 A 2 2 0 0 1 12.00 20.52" />
      {children}
    </svg>
  );
});

export default XilinoGlen;
