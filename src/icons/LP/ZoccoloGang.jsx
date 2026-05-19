import React from 'react';

export const iconData = {
  "id": "ZoccoloGang",
  "name": "ZoccoloGang",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.07 4.22 L 13.13 6.99 L 19.78 7.07 L 17.01 13.13 L 16.93 19.78 L 10.87 17.01 L 4.22 16.93 L 6.99 10.87 Z"
      }
    ]
  ]
};

export const ZoccoloGang = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.07 4.22 L 13.13 6.99 L 19.78 7.07 L 17.01 13.13 L 16.93 19.78 L 10.87 17.01 L 4.22 16.93 L 6.99 10.87 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloGang;
