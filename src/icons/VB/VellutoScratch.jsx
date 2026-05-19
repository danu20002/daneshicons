import React from 'react';

export const iconData = {
  "id": "VellutoScratch",
  "name": "VellutoScratch",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.93 3.21 L 15.84 8.75 L 21.32 9.59 L 16.93 12.98 L 19.70 17.78 L 14.31 16.47 L 12.28 21.63 L 9.95 16.59 L 4.65 18.22 L 7.13 13.26 L 2.55 10.13 L 7.98 8.98 L 7.57 3.45 L 11.85 6.97 Z"
      }
    ]
  ]
};

export const VellutoScratch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.93 3.21 L 15.84 8.75 L 21.32 9.59 L 16.93 12.98 L 19.70 17.78 L 14.31 16.47 L 12.28 21.63 L 9.95 16.59 L 4.65 18.22 L 7.13 13.26 L 2.55 10.13 L 7.98 8.98 L 7.57 3.45 L 11.85 6.97 Z" />
      {children}
    </svg>
  );
});

export default VellutoScratch;
