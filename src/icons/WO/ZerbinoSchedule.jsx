import React from 'react';

export const iconData = {
  "id": "ZerbinoSchedule",
  "name": "ZerbinoSchedule",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.16 22.40 L 9.87 14.20 L 1.60 12.16 L 9.80 9.87 L 11.84 1.60 L 14.13 9.80 L 22.40 11.84 L 14.20 14.13 Z"
      }
    ]
  ]
};

export const ZerbinoSchedule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.16 22.40 L 9.87 14.20 L 1.60 12.16 L 9.80 9.87 L 11.84 1.60 L 14.13 9.80 L 22.40 11.84 L 14.20 14.13 Z" />
      {children}
    </svg>
  );
});

export default ZerbinoSchedule;
