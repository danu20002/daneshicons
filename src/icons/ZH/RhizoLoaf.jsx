import React from 'react';

export const iconData = {
  "id": "RhizoLoaf",
  "name": "RhizoLoaf",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 12.00 a 6.05 6.05 0 1 1 12.10 0 a 6.05 6.05 0 1 1 -12.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.11 12.00 L 21.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 17.02 L 18.44 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.11 L 12.00 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 17.02 L 5.56 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 L 2.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 6.98 L 5.56 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.89 L 12.00 2.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 6.98 L 18.44 5.56"
      }
    ]
  ]
};

export const RhizoLoaf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0" />
      <path d="M 5.95 12.00 a 6.05 6.05 0 1 1 12.10 0 a 6.05 6.05 0 1 1 -12.10 0" />
      <path d="M 19.11 12.00 L 21.11 12.00" />
      <path d="M 17.02 17.02 L 18.44 18.44" />
      <path d="M 12.00 19.11 L 12.00 21.11" />
      <path d="M 6.98 17.02 L 5.56 18.44" />
      <path d="M 4.89 12.00 L 2.89 12.00" />
      <path d="M 6.98 6.98 L 5.56 5.56" />
      <path d="M 12.00 4.89 L 12.00 2.89" />
      <path d="M 17.02 6.98 L 18.44 5.56" />
      {children}
    </svg>
  );
});

export default RhizoLoaf;
