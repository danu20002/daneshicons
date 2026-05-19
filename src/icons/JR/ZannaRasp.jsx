import React from 'react';

export const iconData = {
  "id": "ZannaRasp",
  "name": "ZannaRasp",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 12.00 Q 16.28 14.47 16.64 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 20.03 Q 12.00 16.94 7.36 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 20.03 Q 7.72 14.47 2.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 12.00 Q 7.72 9.53 7.36 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.97 Q 12.00 7.06 16.64 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.97 Q 16.28 9.53 21.27 12.00"
      }
    ]
  ]
};

export const ZannaRasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 12.00 Q 16.28 14.47 16.64 20.03" />
      <path d="M 16.64 20.03 Q 12.00 16.94 7.36 20.03" />
      <path d="M 7.36 20.03 Q 7.72 14.47 2.73 12.00" />
      <path d="M 2.73 12.00 Q 7.72 9.53 7.36 3.97" />
      <path d="M 7.36 3.97 Q 12.00 7.06 16.64 3.97" />
      <path d="M 16.64 3.97 Q 16.28 9.53 21.27 12.00" />
      {children}
    </svg>
  );
});

export default ZannaRasp;
