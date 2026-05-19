import React from 'react';

export const iconData = {
  "id": "ZonaMint",
  "name": "ZonaMint",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 17.13 L 13.84 16.18 L 9.84 21.95 L 8.59 15.04 L 1.87 13.02 L 8.05 9.70 L 7.90 2.68 L 12.97 7.54 L 19.59 5.22 L 16.54 11.54 Z"
      }
    ]
  ]
};

export const ZonaMint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 17.13 L 13.84 16.18 L 9.84 21.95 L 8.59 15.04 L 1.87 13.02 L 8.05 9.70 L 7.90 2.68 L 12.97 7.54 L 19.59 5.22 L 16.54 11.54 Z" />
      {children}
    </svg>
  );
});

export default ZonaMint;
