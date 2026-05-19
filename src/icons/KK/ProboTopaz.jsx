import React from 'react';

export const iconData = {
  "id": "ProboTopaz",
  "name": "ProboTopaz",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.45 12.00 Q 13.86 13.07 16.23 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 19.32 Q 12.00 14.15 7.77 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 19.32 Q 10.14 13.07 3.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 Q 10.14 10.93 7.77 4.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.68 Q 12.00 9.85 16.23 4.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.68 Q 13.86 10.93 20.45 12.00"
      }
    ]
  ]
};

export const ProboTopaz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.45 12.00 Q 13.86 13.07 16.23 19.32" />
      <path d="M 16.23 19.32 Q 12.00 14.15 7.77 19.32" />
      <path d="M 7.77 19.32 Q 10.14 13.07 3.55 12.00" />
      <path d="M 3.55 12.00 Q 10.14 10.93 7.77 4.68" />
      <path d="M 7.77 4.68 Q 12.00 9.85 16.23 4.68" />
      <path d="M 16.23 4.68 Q 13.86 10.93 20.45 12.00" />
      {children}
    </svg>
  );
});

export default ProboTopaz;
