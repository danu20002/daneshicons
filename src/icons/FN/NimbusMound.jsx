import React from 'react';

export const iconData = {
  "id": "NimbusMound",
  "name": "NimbusMound",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 5.39 L 19.16 5.39 L 19.16 18.61 L 4.84 18.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 5.39 L 8.47 1.75 L 22.80 1.75 L 19.16 5.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 5.39 L 22.80 1.75 L 22.80 14.98 L 19.16 18.61"
      }
    ]
  ]
};

export const NimbusMound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 5.39 L 19.16 5.39 L 19.16 18.61 L 4.84 18.61 Z" />
      <path d="M 4.84 5.39 L 8.47 1.75 L 22.80 1.75 L 19.16 5.39" />
      <path d="M 19.16 5.39 L 22.80 1.75 L 22.80 14.98 L 19.16 18.61" />
      {children}
    </svg>
  );
});

export default NimbusMound;
