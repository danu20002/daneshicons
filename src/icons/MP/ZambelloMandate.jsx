import React from 'react';

export const iconData = {
  "id": "ZambelloMandate",
  "name": "ZambelloMandate",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 6.83 L 15.26 6.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 8.77 L 18.10 12.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 13.94 L 14.85 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.74 17.17 L 8.74 17.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 15.23 L 5.90 11.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 10.06 L 9.15 6.60"
      }
    ]
  ]
};

export const ZambelloMandate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 6.83 L 15.26 6.83" />
      <path d="M 16.10 8.77 L 18.10 12.24" />
      <path d="M 16.85 13.94 L 14.85 17.40" />
      <path d="M 12.74 17.17 L 8.74 17.17" />
      <path d="M 7.90 15.23 L 5.90 11.76" />
      <path d="M 7.15 10.06 L 9.15 6.60" />
      {children}
    </svg>
  );
});

export default ZambelloMandate;
