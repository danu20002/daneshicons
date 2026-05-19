import React from 'react';

export const iconData = {
  "id": "ZampinoShirt",
  "name": "ZampinoShirt",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 8.22 L 10.45 8.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.50 5.30 L 14.50 8.76"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 9.08 L 16.05 12.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 15.78 L 13.55 15.78"
      }
    ],
    [
      "path",
      {
        "d": "M 11.50 18.70 L 9.50 15.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 14.92 L 7.95 11.45"
      }
    ]
  ]
};

export const ZampinoShirt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 8.22 L 10.45 8.22" />
      <path d="M 12.50 5.30 L 14.50 8.76" />
      <path d="M 18.05 9.08 L 16.05 12.55" />
      <path d="M 17.55 15.78 L 13.55 15.78" />
      <path d="M 11.50 18.70 L 9.50 15.24" />
      <path d="M 5.95 14.92 L 7.95 11.45" />
      {children}
    </svg>
  );
});

export default ZampinoShirt;
