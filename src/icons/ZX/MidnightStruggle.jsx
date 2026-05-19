import React from 'react';

export const iconData = {
  "id": "MidnightStruggle",
  "name": "MidnightStruggle",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.65 17.41 L 16.96 15.32 L 14.01 14.16 L 14.98 12.72 L 16.07 14.06 L 14.07 13.48 L 15.70 12.16 L 16.87 13.10 L 16.81 11.10 L 17.51 11.08 L 16.65 10.89 L 14.26 8.07 L 15.10 10.54 L 14.86 11.68 L 14.92 12.81 L 12.32 10.38 L 12.99 13.36 L 10.24 13.78 L 12.20 16.42 L 14.26 15.99"
      }
    ]
  ]
};

export const MidnightStruggle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.65 17.41 L 16.96 15.32 L 14.01 14.16 L 14.98 12.72 L 16.07 14.06 L 14.07 13.48 L 15.70 12.16 L 16.87 13.10 L 16.81 11.10 L 17.51 11.08 L 16.65 10.89 L 14.26 8.07 L 15.10 10.54 L 14.86 11.68 L 14.92 12.81 L 12.32 10.38 L 12.99 13.36 L 10.24 13.78 L 12.20 16.42 L 14.26 15.99" />
      {children}
    </svg>
  );
});

export default MidnightStruggle;
