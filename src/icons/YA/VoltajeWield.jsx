import React from 'react';

export const iconData = {
  "id": "VoltajeWield",
  "name": "VoltajeWield",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 20.35 L 8.56 11.36 L 8.34 1.64 L 14.27 9.34 L 22.80 14.01 L 13.17 15.30 Z"
      }
    ]
  ]
};

export const VoltajeWield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 20.35 L 8.56 11.36 L 8.34 1.64 L 14.27 9.34 L 22.80 14.01 L 13.17 15.30 Z" />
      {children}
    </svg>
  );
});

export default VoltajeWield;
