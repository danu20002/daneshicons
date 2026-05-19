import React from 'react';

export const iconData = {
  "id": "StreptoPortfolio",
  "name": "StreptoPortfolio",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.34 12.55 L 7.92 9.35 L 8.18 2.03 L 13.26 7.30 L 20.30 5.29 L 16.86 11.75 L 20.95 17.82 L 13.74 16.54 L 9.23 22.31 L 8.22 15.06 Z"
      }
    ]
  ]
};

export const StreptoPortfolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.34 12.55 L 7.92 9.35 L 8.18 2.03 L 13.26 7.30 L 20.30 5.29 L 16.86 11.75 L 20.95 17.82 L 13.74 16.54 L 9.23 22.31 L 8.22 15.06 Z" />
      {children}
    </svg>
  );
});

export default StreptoPortfolio;
