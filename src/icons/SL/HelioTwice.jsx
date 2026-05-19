import React from 'react';

export const iconData = {
  "id": "HelioTwice",
  "name": "HelioTwice",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.20 8.29 L 13.20 8.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.66 8.19 L 15.90 11.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 13.35 L 13.21 15.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.09 16.65 L 8.85 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 13.52 L 8.84 9.71"
      }
    ]
  ]
};

export const HelioTwice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.20 8.29 L 13.20 8.29" />
      <path d="M 14.66 8.19 L 15.90 11.99" />
      <path d="M 16.45 13.35 L 13.21 15.70" />
      <path d="M 12.09 16.65 L 8.85 14.30" />
      <path d="M 7.61 13.52 L 8.84 9.71" />
      {children}
    </svg>
  );
});

export default HelioTwice;
