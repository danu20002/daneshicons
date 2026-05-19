import React from 'react';

export const iconData = {
  "id": "ZuffaDome",
  "name": "ZuffaDome",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.34 18.92 L 11.11 15.76 L 2.34 14.90 L 9.18 9.35 L 14.32 2.18 L 15.70 10.89 Z"
      }
    ]
  ]
};

export const ZuffaDome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.34 18.92 L 11.11 15.76 L 2.34 14.90 L 9.18 9.35 L 14.32 2.18 L 15.70 10.89 Z" />
      {children}
    </svg>
  );
});

export default ZuffaDome;
