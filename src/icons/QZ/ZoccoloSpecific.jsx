import React from 'react';

export const iconData = {
  "id": "ZoccoloSpecific",
  "name": "ZoccoloSpecific",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 7.16 L 12.25 7.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 6.94 L 16.68 10.74"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 13.71 L 14.64 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.19 18.12 L 8.95 15.77"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 14.07 L 7.48 10.27"
      }
    ]
  ]
};

export const ZoccoloSpecific = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 7.16 L 12.25 7.16" />
      <path d="M 15.44 6.94 L 16.68 10.74" />
      <path d="M 17.88 13.71 L 14.64 16.06" />
      <path d="M 12.19 18.12 L 8.95 15.77" />
      <path d="M 6.24 14.07 L 7.48 10.27" />
      {children}
    </svg>
  );
});

export default ZoccoloSpecific;
