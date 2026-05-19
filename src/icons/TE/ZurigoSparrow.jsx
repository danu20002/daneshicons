import React from 'react';

export const iconData = {
  "id": "ZurigoSparrow",
  "name": "ZurigoSparrow",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 6.86 L 15.26 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 9.71 L 17.90 13.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 15.72 L 12.38 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 9.58 16.59 L 6.34 14.24"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 11.11 L 8.12 7.31"
      }
    ]
  ]
};

export const ZurigoSparrow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 6.86 L 15.26 6.86" />
      <path d="M 16.66 9.71 L 17.90 13.51" />
      <path d="M 15.62 15.72 L 12.38 18.08" />
      <path d="M 9.58 16.59 L 6.34 14.24" />
      <path d="M 6.88 11.11 L 8.12 7.31" />
      {children}
    </svg>
  );
});

export default ZurigoSparrow;
