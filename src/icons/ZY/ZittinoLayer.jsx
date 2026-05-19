import React from 'react';

export const iconData = {
  "id": "ZittinoLayer",
  "name": "ZittinoLayer",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 6.57 a 7.24 2.1714881993830204 0 1 0 14.48 0 a 7.24 2.1714881993830204 0 1 0 -14.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 10.19 a 8.87 2.6595190354817104 0 1 0 17.73 0 a 8.87 2.6595190354817104 0 1 0 -17.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 13.81 a 8.87 2.6595190354817104 0 1 0 17.73 0 a 8.87 2.6595190354817104 0 1 0 -17.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 17.43 a 7.24 2.1714881993830204 0 1 0 14.48 0 a 7.24 2.1714881993830204 0 1 0 -14.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.95 A 2 2 0 0 0 12.00 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.95 A 2 2 0 0 1 12.00 21.05"
      }
    ]
  ]
};

export const ZittinoLayer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.95 12.00 a 9.05 9.05 0 1 0 18.10 0 a 9.05 9.05 0 1 0 -18.10 0" />
      <path d="M 4.76 6.57 a 7.24 2.1714881993830204 0 1 0 14.48 0 a 7.24 2.1714881993830204 0 1 0 -14.48 0" />
      <path d="M 3.13 10.19 a 8.87 2.6595190354817104 0 1 0 17.73 0 a 8.87 2.6595190354817104 0 1 0 -17.73 0" />
      <path d="M 3.13 13.81 a 8.87 2.6595190354817104 0 1 0 17.73 0 a 8.87 2.6595190354817104 0 1 0 -17.73 0" />
      <path d="M 4.76 17.43 a 7.24 2.1714881993830204 0 1 0 14.48 0 a 7.24 2.1714881993830204 0 1 0 -14.48 0" />
      <path d="M 12.00 2.95 A 2 2 0 0 0 12.00 21.05" />
      <path d="M 12.00 2.95 A 2 2 0 0 1 12.00 21.05" />
      {children}
    </svg>
  );
});

export default ZittinoLayer;
