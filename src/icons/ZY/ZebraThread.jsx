import React from 'react';

export const iconData = {
  "id": "ZebraThread",
  "name": "ZebraThread",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.10 12.00 a 9.90 9.90 0 1 0 19.80 0 a 9.90 9.90 0 1 0 -19.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.10 12.00 a 9.90 2.969993068417534 0 1 0 19.80 0 a 9.90 2.969993068417534 0 1 0 -19.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 0 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 1 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 0 7.05 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 1 7.05 20.57"
      }
    ]
  ]
};

export const ZebraThread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.10 12.00 a 9.90 9.90 0 1 0 19.80 0 a 9.90 9.90 0 1 0 -19.80 0" />
      <path d="M 2.10 12.00 a 9.90 2.969993068417534 0 1 0 19.80 0 a 9.90 2.969993068417534 0 1 0 -19.80 0" />
      <path d="M 16.95 3.43 A 2 2 0 0 0 16.95 20.57" />
      <path d="M 16.95 3.43 A 2 2 0 0 1 16.95 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 0 7.05 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 1 7.05 20.57" />
      {children}
    </svg>
  );
});

export default ZebraThread;
