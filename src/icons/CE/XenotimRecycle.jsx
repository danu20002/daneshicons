import React from 'react';

export const iconData = {
  "id": "XenotimRecycle",
  "name": "XenotimRecycle",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 12.00 a 3.82 3.82 0 1 0 7.63 0 a 3.82 3.82 0 1 0 -7.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 12.00 a 5.54 5.54 0 1 0 11.07 0 a 5.54 5.54 0 1 0 -11.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0"
      }
    ]
  ]
};

export const XenotimRecycle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0" stroke-dasharray="6 3" />
      <path d="M 8.18 12.00 a 3.82 3.82 0 1 0 7.63 0 a 3.82 3.82 0 1 0 -7.63 0" />
      <path d="M 6.46 12.00 a 5.54 5.54 0 1 0 11.07 0 a 5.54 5.54 0 1 0 -11.07 0" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0" />
      <path d="M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0" />
      {children}
    </svg>
  );
});

export default XenotimRecycle;
