import React from 'react';

export const iconData = {
  "id": "ZonaElope",
  "name": "ZonaElope",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 6.27 L 19.64 6.27 L 19.64 17.73 L 4.36 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 6.27 L 9.00 1.63 L 24.28 1.63 L 19.64 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 6.27 L 24.28 1.63 L 24.28 13.09 L 19.64 17.73"
      }
    ]
  ]
};

export const ZonaElope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 6.27 L 19.64 6.27 L 19.64 17.73 L 4.36 17.73 Z" />
      <path d="M 4.36 6.27 L 9.00 1.63 L 24.28 1.63 L 19.64 6.27" />
      <path d="M 19.64 6.27 L 24.28 1.63 L 24.28 13.09 L 19.64 17.73" />
      {children}
    </svg>
  );
});

export default ZonaElope;
