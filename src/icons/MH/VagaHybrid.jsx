import React from 'react';

export const iconData = {
  "id": "VagaHybrid",
  "name": "VagaHybrid",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.95 13.55 L 16.34 14.65 L 17.94 20.13 L 13.20 16.94 L 10.45 21.95 L 9.35 16.34 L 3.87 17.94 L 7.06 13.20 L 2.05 10.45 L 7.66 9.35 L 6.06 3.87 L 10.80 7.06 L 13.55 2.05 L 14.65 7.66 L 20.13 6.06 L 16.94 10.80 Z"
      }
    ]
  ]
};

export const VagaHybrid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.95 13.55 L 16.34 14.65 L 17.94 20.13 L 13.20 16.94 L 10.45 21.95 L 9.35 16.34 L 3.87 17.94 L 7.06 13.20 L 2.05 10.45 L 7.66 9.35 L 6.06 3.87 L 10.80 7.06 L 13.55 2.05 L 14.65 7.66 L 20.13 6.06 L 16.94 10.80 Z" />
      {children}
    </svg>
  );
});

export default VagaHybrid;
