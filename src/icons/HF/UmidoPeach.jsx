import React from 'react';

export const iconData = {
  "id": "UmidoPeach",
  "name": "UmidoPeach",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.43 21.85 L 10.06 16.86 L 4.19 18.16 L 6.83 12.75 L 2.76 8.31 L 8.76 7.90 L 10.57 2.15 L 13.94 7.14 L 19.81 5.84 L 17.17 11.25 L 21.24 15.69 L 15.24 16.10 Z"
      }
    ]
  ]
};

export const UmidoPeach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.43 21.85 L 10.06 16.86 L 4.19 18.16 L 6.83 12.75 L 2.76 8.31 L 8.76 7.90 L 10.57 2.15 L 13.94 7.14 L 19.81 5.84 L 17.17 11.25 L 21.24 15.69 L 15.24 16.10 Z" />
      {children}
    </svg>
  );
});

export default UmidoPeach;
