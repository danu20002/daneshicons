import React from 'react';

export const iconData = {
  "id": "ZoticoTelevision",
  "name": "ZoticoTelevision",
  "category": "FC",
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
        "d": "M 7.70 12.00 a 4.30 4.30 0 1 0 8.61 0 a 4.30 4.30 0 1 0 -8.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 12.00 a 6.49 6.49 0 1 0 12.98 0 a 6.49 6.49 0 1 0 -12.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const ZoticoTelevision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.70 12.00 a 4.30 4.30 0 1 0 8.61 0 a 4.30 4.30 0 1 0 -8.61 0" />
      <path d="M 5.51 12.00 a 6.49 6.49 0 1 0 12.98 0 a 6.49 6.49 0 1 0 -12.98 0" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default ZoticoTelevision;
