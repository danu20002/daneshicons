import React from 'react';

export const iconData = {
  "id": "ChronoEraser",
  "name": "ChronoEraser",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.38 12.58 L 11.42 21.38 L 2.62 11.42 L 12.58 2.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.94 13.84 L 10.16 17.94 L 6.06 10.16 L 13.84 6.06 Z"
      }
    ]
  ]
};

export const ChronoEraser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.38 12.58 L 11.42 21.38 L 2.62 11.42 L 12.58 2.62 Z" />
      <path d="M 17.94 13.84 L 10.16 17.94 L 6.06 10.16 L 13.84 6.06 Z" />
      {children}
    </svg>
  );
});

export default ChronoEraser;
