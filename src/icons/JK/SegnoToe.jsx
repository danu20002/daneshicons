import React from 'react';

export const iconData = {
  "id": "SegnoToe",
  "name": "SegnoToe",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.74 21.83 L 8.48 14.72 L 2.17 10.74 L 9.28 8.48 L 13.26 2.17 L 15.52 9.28 L 21.83 13.26 L 14.72 15.52 Z"
      }
    ]
  ]
};

export const SegnoToe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.74 21.83 L 8.48 14.72 L 2.17 10.74 L 9.28 8.48 L 13.26 2.17 L 15.52 9.28 L 21.83 13.26 L 14.72 15.52 Z" />
      {children}
    </svg>
  );
});

export default SegnoToe;
