import React from 'react';

export const iconData = {
  "id": "ViveriSoup",
  "name": "ViveriSoup",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.31 9.17 L 19.10 18.64 L 9.80 21.47 L 2.69 14.83 L 4.90 5.36 L 14.20 2.53 Z"
      }
    ]
  ]
};

export const ViveriSoup = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.31 9.17 L 19.10 18.64 L 9.80 21.47 L 2.69 14.83 L 4.90 5.36 L 14.20 2.53 Z" />
      {children}
    </svg>
  );
});

export default ViveriSoup;
