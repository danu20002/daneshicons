import React from 'react';

export const iconData = {
  "id": "ZinzinoUnfair",
  "name": "ZinzinoUnfair",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.66 20.55 L 6.89 14.72 L 1.92 11.65 L 7.09 8.93 L 7.26 3.10 L 12.20 6.21 L 17.34 3.45 L 17.11 9.28 L 22.08 12.35 L 16.91 15.07 L 16.74 20.90 L 11.80 17.79 Z"
      }
    ]
  ]
};

export const ZinzinoUnfair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.66 20.55 L 6.89 14.72 L 1.92 11.65 L 7.09 8.93 L 7.26 3.10 L 12.20 6.21 L 17.34 3.45 L 17.11 9.28 L 22.08 12.35 L 16.91 15.07 L 16.74 20.90 L 11.80 17.79 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoUnfair;
