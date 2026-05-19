import React from 'react';

export const iconData = {
  "id": "ZinzinoTennis",
  "name": "ZinzinoTennis",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.98 11.35 6.86 5.92 Q 13.29 8.35 19.72 10.79 Q 16.32 13.86 12.93 16.92 Q 9.01 16.86 5.09 16.79 Z"
      }
    ]
  ]
};

export const ZinzinoTennis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.98 11.35 6.86 5.92 Q 13.29 8.35 19.72 10.79 Q 16.32 13.86 12.93 16.92 Q 9.01 16.86 5.09 16.79 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoTennis;
