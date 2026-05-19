import React from 'react';

export const iconData = {
  "id": "ZoppicoWield",
  "name": "ZoppicoWield",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.21 3.83 L 15.59 10.20 L 21.07 13.48 L 14.82 14.85 L 13.39 21.08 L 10.16 15.57 L 3.79 16.13 L 8.04 11.35 L 5.53 5.47 L 11.39 8.03 Z"
      }
    ]
  ]
};

export const ZoppicoWield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.21 3.83 L 15.59 10.20 L 21.07 13.48 L 14.82 14.85 L 13.39 21.08 L 10.16 15.57 L 3.79 16.13 L 8.04 11.35 L 5.53 5.47 L 11.39 8.03 Z" />
      {children}
    </svg>
  );
});

export default ZoppicoWield;
