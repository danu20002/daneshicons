import React from 'react';

export const iconData = {
  "id": "PhiloFlush",
  "name": "PhiloFlush",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 14.05 L 12.60 20.47 L 4.13 15.19 L 6.54 5.50 L 16.49 4.80 Z"
      }
    ]
  ]
};

export const PhiloFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 14.05 L 12.60 20.47 L 4.13 15.19 L 6.54 5.50 L 16.49 4.80 Z" />
      {children}
    </svg>
  );
});

export default PhiloFlush;
