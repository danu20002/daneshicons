import React from 'react';

export const iconData = {
  "id": "ZoologiaWool",
  "name": "ZoologiaWool",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 10.32 L 12.43 10.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.50 8.09 L 13.74 11.89"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 11.27 L 12.64 13.62"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 15.46 L 10.66 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.30 14.87 L 10.53 11.07"
      }
    ]
  ]
};

export const ZoologiaWool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 10.32 L 12.43 10.32" />
      <path d="M 12.50 8.09 L 13.74 11.89" />
      <path d="M 15.88 11.27 L 12.64 13.62" />
      <path d="M 13.90 15.46 L 10.66 13.11" />
      <path d="M 9.30 14.87 L 10.53 11.07" />
      {children}
    </svg>
  );
});

export default ZoologiaWool;
