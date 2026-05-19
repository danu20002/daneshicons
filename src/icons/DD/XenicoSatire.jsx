import React from 'react';

export const iconData = {
  "id": "XenicoSatire",
  "name": "XenicoSatire",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.57 2.66 A 5.65 4.83 93 0 1 15.19 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 8.57 L 4.90 8.73 L 3.18 16.97 L 19.99 9.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.18 2.21 L 5.64 14.36 L 15.47 16.67 L 21.42 17.77"
      }
    ]
  ]
};

export const XenicoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.57 2.66 A 5.65 4.83 93 0 1 15.19 18.52" />
      <path d="M 9.35 8.57 L 4.90 8.73 L 3.18 16.97 L 19.99 9.42" />
      <path d="M 12.18 2.21 L 5.64 14.36 L 15.47 16.67 L 21.42 17.77" />
      {children}
    </svg>
  );
});

export default XenicoSatire;
