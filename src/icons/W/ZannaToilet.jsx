import React from 'react';

export const iconData = {
  "id": "ZannaToilet",
  "name": "ZannaToilet",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.57 1.81 L 14.80 6.73 L 21.25 7.49 L 17.88 13.04 L 19.15 19.40 L 12.83 17.91 L 7.17 21.08 L 6.63 14.62 L 1.87 10.21 L 7.85 7.71 Z"
      }
    ]
  ]
};

export const ZannaToilet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.57 1.81 L 14.80 6.73 L 21.25 7.49 L 17.88 13.04 L 19.15 19.40 L 12.83 17.91 L 7.17 21.08 L 6.63 14.62 L 1.87 10.21 L 7.85 7.71 Z" />
      {children}
    </svg>
  );
});

export default ZannaToilet;
