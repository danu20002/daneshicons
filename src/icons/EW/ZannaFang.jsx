import React from 'react';

export const iconData = {
  "id": "ZannaFang",
  "name": "ZannaFang",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.84 3.92 L 19.46 8.40 L 19.46 15.59 L 13.85 20.08 L 6.84 18.48 L 3.72 12.00 L 6.83 5.53 Z"
      }
    ]
  ]
};

export const ZannaFang = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.84 3.92 L 19.46 8.40 L 19.46 15.59 L 13.85 20.08 L 6.84 18.48 L 3.72 12.00 L 6.83 5.53 Z" />
      {children}
    </svg>
  );
});

export default ZannaFang;
