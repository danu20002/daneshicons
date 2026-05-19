import React from 'react';

export const iconData = {
  "id": "MisoEnhance",
  "name": "MisoEnhance",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 21.01 L 6.84 14.92 L 1.55 11.92 L 6.89 9.00 L 6.85 2.91 L 12.05 6.07 L 17.29 2.99 L 17.16 9.08 L 22.45 12.08 L 17.11 15.00 L 17.15 21.09 L 11.95 17.93 Z"
      }
    ]
  ]
};

export const MisoEnhance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 21.01 L 6.84 14.92 L 1.55 11.92 L 6.89 9.00 L 6.85 2.91 L 12.05 6.07 L 17.29 2.99 L 17.16 9.08 L 22.45 12.08 L 17.11 15.00 L 17.15 21.09 L 11.95 17.93 Z" />
      {children}
    </svg>
  );
});

export default MisoEnhance;
