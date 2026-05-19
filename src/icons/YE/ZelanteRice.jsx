import React from 'react';

export const iconData = {
  "id": "ZelanteRice",
  "name": "ZelanteRice",
  "category": "YE",
  "nodes": [
    [
      "path",
      {
        "d": "M -12.00 4.00 L 20.00 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M -8.80 4.00 L 20.00 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M -5.60 4.00 L 20.00 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M -2.40 4.00 L 20.00 13.60"
      }
    ],
    [
      "path",
      {
        "d": "M 0.80 4.00 L 20.00 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 4.00 L 20.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 4.00 L 20.00 23.20"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 4.00 L 20.00 26.40"
      }
    ],
    [
      "path",
      {
        "d": "M 13.60 4.00 L 20.00 29.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 4.00 L 20.00 32.80"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 4.00 L 20.00 36.00"
      }
    ],
    [
      "path",
      {
        "d": "M -12.00 20.00 L 20.00 -12.00"
      }
    ],
    [
      "path",
      {
        "d": "M -8.80 20.00 L 20.00 -8.80"
      }
    ],
    [
      "path",
      {
        "d": "M -5.60 20.00 L 20.00 -5.60"
      }
    ],
    [
      "path",
      {
        "d": "M -2.40 20.00 L 20.00 -2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 0.80 20.00 L 20.00 0.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 20.00 L 20.00 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 20.00 L 20.00 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 20.00 L 20.00 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M 13.60 20.00 L 20.00 13.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 20.00 L 20.00 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 20.00 L 20.00 20.00"
      }
    ]
  ]
};

export const ZelanteRice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M -12.00 4.00 L 20.00 4.00" />
      <path d="M -8.80 4.00 L 20.00 7.20" />
      <path d="M -5.60 4.00 L 20.00 10.40" />
      <path d="M -2.40 4.00 L 20.00 13.60" />
      <path d="M 0.80 4.00 L 20.00 16.80" />
      <path d="M 4.00 4.00 L 20.00 20.00" />
      <path d="M 7.20 4.00 L 20.00 23.20" />
      <path d="M 10.40 4.00 L 20.00 26.40" />
      <path d="M 13.60 4.00 L 20.00 29.60" />
      <path d="M 16.80 4.00 L 20.00 32.80" />
      <path d="M 20.00 4.00 L 20.00 36.00" />
      <path d="M -12.00 20.00 L 20.00 -12.00" />
      <path d="M -8.80 20.00 L 20.00 -8.80" />
      <path d="M -5.60 20.00 L 20.00 -5.60" />
      <path d="M -2.40 20.00 L 20.00 -2.40" />
      <path d="M 0.80 20.00 L 20.00 0.80" />
      <path d="M 4.00 20.00 L 20.00 4.00" />
      <path d="M 7.20 20.00 L 20.00 7.20" />
      <path d="M 10.40 20.00 L 20.00 10.40" />
      <path d="M 13.60 20.00 L 20.00 13.60" />
      <path d="M 16.80 20.00 L 20.00 16.80" />
      <path d="M 20.00 20.00 L 20.00 20.00" />
      {children}
    </svg>
  );
});

export default ZelanteRice;
