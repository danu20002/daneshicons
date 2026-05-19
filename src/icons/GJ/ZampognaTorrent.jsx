import React from 'react';

export const iconData = {
  "id": "ZampognaTorrent",
  "name": "ZampognaTorrent",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.22 21.36 L 3.47 16.06 L 5.51 5.14 L 16.51 3.71 L 21.28 13.73 Z"
      }
    ]
  ]
};

export const ZampognaTorrent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.22 21.36 L 3.47 16.06 L 5.51 5.14 L 16.51 3.71 L 21.28 13.73 Z" />
      {children}
    </svg>
  );
});

export default ZampognaTorrent;
