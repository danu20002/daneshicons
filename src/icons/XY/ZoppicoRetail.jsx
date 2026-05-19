import React from 'react';

export const iconData = {
  "id": "ZoppicoRetail",
  "name": "ZoppicoRetail",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.21 2.84 L 17.92 4.96 L 21.16 11.21 L 19.04 17.92 L 12.79 21.16 L 6.08 19.04 L 2.84 12.79 L 4.96 6.08 Z"
      }
    ]
  ]
};

export const ZoppicoRetail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.21 2.84 L 17.92 4.96 L 21.16 11.21 L 19.04 17.92 L 12.79 21.16 L 6.08 19.04 L 2.84 12.79 L 4.96 6.08 Z" />
      {children}
    </svg>
  );
});

export default ZoppicoRetail;
