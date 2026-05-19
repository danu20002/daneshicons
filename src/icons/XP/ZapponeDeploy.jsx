import React from 'react';

export const iconData = {
  "id": "ZapponeDeploy",
  "name": "ZapponeDeploy",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 9.06 A 4.71 2.11 162 0 0 16.94 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 14.43 4.63 A 4.01 5.06 91 0 0 19.98 12.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 9.60 A 6.53 4.29 87 0 0 10.53 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 13.87 15.23 A 2.83 5.04 162 0 1 2.81 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 9.22 Q 6.30 14.17 19.30 9.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 14.99 C 17.23 5.43, 5.33 9.31, 12.25 14.54"
      }
    ]
  ]
};

export const ZapponeDeploy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 9.06 A 4.71 2.11 162 0 0 16.94 17.65" />
      <path d="M 14.43 4.63 A 4.01 5.06 91 0 0 19.98 12.88" />
      <path d="M 6.45 9.60 A 6.53 4.29 87 0 0 10.53 19.27" />
      <path d="M 13.87 15.23 A 2.83 5.04 162 0 1 2.81 15.13" />
      <path d="M 4.70 9.22 Q 6.30 14.17 19.30 9.13" />
      <path d="M 5.72 14.99 C 17.23 5.43, 5.33 9.31, 12.25 14.54" />
      {children}
    </svg>
  );
});

export default ZapponeDeploy;
