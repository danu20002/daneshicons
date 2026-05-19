import React from 'react';

export const iconData = {
  "id": "ZonaVintage",
  "name": "ZonaVintage",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.24 9.94 L 11.24 9.94"
      }
    ],
    [
      "path",
      {
        "d": "M 14.06 7.24 L 14.06 11.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.76 14.06 L 12.76 14.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 16.76 L 9.94 12.76"
      }
    ]
  ]
};

export const ZonaVintage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.24 9.94 L 11.24 9.94" />
      <path d="M 14.06 7.24 L 14.06 11.24" />
      <path d="M 16.76 14.06 L 12.76 14.06" />
      <path d="M 9.94 16.76 L 9.94 12.76" />
      {children}
    </svg>
  );
});

export default ZonaVintage;
