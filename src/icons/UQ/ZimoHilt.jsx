import React from 'react';

export const iconData = {
  "id": "ZimoHilt",
  "name": "ZimoHilt",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.92 10.92 L 10.92 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 8.14 L 13.47 11.60"
      }
    ],
    [
      "path",
      {
        "d": "M 13.61 16.94 L 11.61 13.48"
      }
    ]
  ]
};

export const ZimoHilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.92 10.92 L 10.92 10.92" />
      <path d="M 15.47 8.14 L 13.47 11.60" />
      <path d="M 13.61 16.94 L 11.61 13.48" />
      {children}
    </svg>
  );
});

export default ZimoHilt;
