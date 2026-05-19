import React from 'react';

export const iconData = {
  "id": "ZuppaProtocol",
  "name": "ZuppaProtocol",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 6.31 C 9.45 8.98, 12.78 8.12, 18.53 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 6.07 C 17.85 18.48, 6.52 12.33, 14.37 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 2.17 C 5.20 11.26, 10.45 8.80, 17.94 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 9.41 C 13.25 10.66, 6.35 12.16, 14.38 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 2.87 C 4.09 10.47, 13.89 16.23, 21.95 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 4.04 C 18.86 8.30, 14.82 8.34, 21.18 21.92"
      }
    ]
  ]
};

export const ZuppaProtocol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 6.31 C 9.45 8.98, 12.78 8.12, 18.53 14.99" />
      <path d="M 7.01 6.07 C 17.85 18.48, 6.52 12.33, 14.37 19.58" />
      <path d="M 7.96 2.17 C 5.20 11.26, 10.45 8.80, 17.94 15.54" />
      <path d="M 3.15 9.41 C 13.25 10.66, 6.35 12.16, 14.38 16.46" />
      <path d="M 5.97 2.87 C 4.09 10.47, 13.89 16.23, 21.95 20.74" />
      <path d="M 2.83 4.04 C 18.86 8.30, 14.82 8.34, 21.18 21.92" />
      {children}
    </svg>
  );
});

export default ZuppaProtocol;
