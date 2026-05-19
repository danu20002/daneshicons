import React from 'react';

export const iconData = {
  "id": "AstroShoot",
  "name": "AstroShoot",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.94 3.13 L 12.02 7.96 L 17.15 3.18 L 15.51 10.00 L 22.22 12.05 L 15.48 14.04 L 17.06 20.87 L 11.98 16.04 L 6.85 20.82 L 8.49 14.00 L 1.78 11.95 L 8.52 9.96 Z"
      }
    ]
  ]
};

export const AstroShoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.94 3.13 L 12.02 7.96 L 17.15 3.18 L 15.51 10.00 L 22.22 12.05 L 15.48 14.04 L 17.06 20.87 L 11.98 16.04 L 6.85 20.82 L 8.49 14.00 L 1.78 11.95 L 8.52 9.96 Z" />
      {children}
    </svg>
  );
});

export default AstroShoot;
