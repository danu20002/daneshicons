import React from 'react';

export const iconData = {
  "id": "UrceoRag",
  "name": "UrceoRag",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 9.08 L 12.70 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 13.76 7.96 L 15.00 11.76"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 12.43 L 13.15 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.95 16.30 L 9.71 13.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 14.23 L 9.44 10.43"
      }
    ]
  ]
};

export const UrceoRag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 9.08 L 12.70 9.08" />
      <path d="M 13.76 7.96 L 15.00 11.76" />
      <path d="M 16.39 12.43 L 13.15 14.78" />
      <path d="M 12.95 16.30 L 9.71 13.95" />
      <path d="M 8.20 14.23 L 9.44 10.43" />
      {children}
    </svg>
  );
});

export default UrceoRag;
