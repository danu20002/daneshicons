import React from 'react';

export const iconData = {
  "id": "IcosaEquator",
  "name": "IcosaEquator",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.13 1.28 L 16.10 8.00 L 22.72 12.13 L 16.00 16.10 L 11.87 22.72 L 7.90 16.00 L 1.28 11.87 L 8.00 7.90 Z"
      }
    ]
  ]
};

export const IcosaEquator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.13 1.28 L 16.10 8.00 L 22.72 12.13 L 16.00 16.10 L 11.87 22.72 L 7.90 16.00 L 1.28 11.87 L 8.00 7.90 Z" />
      {children}
    </svg>
  );
});

export default IcosaEquator;
