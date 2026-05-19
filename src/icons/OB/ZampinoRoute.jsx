import React from 'react';

export const iconData = {
  "id": "ZampinoRoute",
  "name": "ZampinoRoute",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 10.84 L 13.55 10.84"
      }
    ],
    [
      "path",
      {
        "d": "M 11.78 9.30 L 13.78 12.76"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 10.45 L 12.23 13.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.45 13.16 L 10.45 13.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.22 14.70 L 10.22 11.24"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 13.55 L 11.77 10.08"
      }
    ]
  ]
};

export const ZampinoRoute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 10.84 L 13.55 10.84" />
      <path d="M 11.78 9.30 L 13.78 12.76" />
      <path d="M 14.23 10.45 L 12.23 13.92" />
      <path d="M 14.45 13.16 L 10.45 13.16" />
      <path d="M 12.22 14.70 L 10.22 11.24" />
      <path d="M 9.77 13.55 L 11.77 10.08" />
      {children}
    </svg>
  );
});

export default ZampinoRoute;
