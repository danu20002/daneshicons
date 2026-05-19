import React from 'react';

export const iconData = {
  "id": "SolidoChunk",
  "name": "SolidoChunk",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.26 7.10 L 11.26 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 10.34 L 16.61 13.81"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 18.55 L 8.13 15.09"
      }
    ]
  ]
};

export const SolidoChunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.26 7.10 L 11.26 7.10" />
      <path d="M 18.61 10.34 L 16.61 13.81" />
      <path d="M 10.13 18.55 L 8.13 15.09" />
      {children}
    </svg>
  );
});

export default SolidoChunk;
