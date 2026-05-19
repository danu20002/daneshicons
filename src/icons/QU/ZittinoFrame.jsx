import React from 'react';

export const iconData = {
  "id": "ZittinoFrame",
  "name": "ZittinoFrame",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 12.00 a 4.86 4.86 0 1 0 9.72 0 a 4.86 4.86 0 1 0 -9.72 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 12.00 a 7.37 7.37 0 1 0 14.75 0 a 7.37 7.37 0 1 0 -14.75 0"
      }
    ]
  ]
};

export const ZittinoFrame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0" />
      <path d="M 7.14 12.00 a 4.86 4.86 0 1 0 9.72 0 a 4.86 4.86 0 1 0 -9.72 0" stroke-dasharray="3 1" />
      <path d="M 4.63 12.00 a 7.37 7.37 0 1 0 14.75 0 a 7.37 7.37 0 1 0 -14.75 0" />
      {children}
    </svg>
  );
});

export default ZittinoFrame;
