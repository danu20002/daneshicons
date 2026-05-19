import React from 'react';

export const iconData = {
  "id": "ZeloSummon",
  "name": "ZeloSummon",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.54 10.50 12.10 6.91 Q 12.15 8.82 12.20 10.74 Q 14.32 12.67 16.45 14.61 Q 15.83 15.73 15.21 16.84 Q 14.60 15.94 13.98 15.04 Q 13.00 16.78 12.02 18.53 Q 8.50 16.31 4.99 14.09 Z"
      }
    ]
  ]
};

export const ZeloSummon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.54 10.50 12.10 6.91 Q 12.15 8.82 12.20 10.74 Q 14.32 12.67 16.45 14.61 Q 15.83 15.73 15.21 16.84 Q 14.60 15.94 13.98 15.04 Q 13.00 16.78 12.02 18.53 Q 8.50 16.31 4.99 14.09 Z" />
      {children}
    </svg>
  );
});

export default ZeloSummon;
