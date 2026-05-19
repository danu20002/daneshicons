import React from 'react';

export const iconData = {
  "id": "ZizzoloDelay",
  "name": "ZizzoloDelay",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.80 22.11 L 8.22 13.62 L 3.84 5.90 L 12.49 7.92 L 21.36 7.98 L 15.29 14.46 Z"
      }
    ]
  ]
};

export const ZizzoloDelay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.80 22.11 L 8.22 13.62 L 3.84 5.90 L 12.49 7.92 L 21.36 7.98 L 15.29 14.46 Z" />
      {children}
    </svg>
  );
});

export default ZizzoloDelay;
