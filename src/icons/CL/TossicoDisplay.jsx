import React from 'react';

export const iconData = {
  "id": "TossicoDisplay",
  "name": "TossicoDisplay",
  "category": "CL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.78 8.43 5.19 3.99 Q 12.88 6.07 20.58 8.15 Q 19.01 9.00 17.45 9.85 Q 18.25 11.95 19.04 14.05 Q 14.06 17.16 9.08 20.27 Q 9.03 18.30 8.99 16.32 Q 7.11 16.51 5.24 16.70 Q 6.81 14.78 8.38 12.87 Z"
      }
    ]
  ]
};

export const TossicoDisplay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.78 8.43 5.19 3.99 Q 12.88 6.07 20.58 8.15 Q 19.01 9.00 17.45 9.85 Q 18.25 11.95 19.04 14.05 Q 14.06 17.16 9.08 20.27 Q 9.03 18.30 8.99 16.32 Q 7.11 16.51 5.24 16.70 Q 6.81 14.78 8.38 12.87 Z" />
      {children}
    </svg>
  );
});

export default TossicoDisplay;
