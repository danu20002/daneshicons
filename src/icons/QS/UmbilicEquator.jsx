import React from 'react';

export const iconData = {
  "id": "UmbilicEquator",
  "name": "UmbilicEquator",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.28 13.97 L 14.83 14.54 L 14.93 21.02 L 11.21 15.72 L 5.66 19.05 L 8.38 13.18 L 2.72 10.03 L 9.17 9.46 L 9.07 2.98 L 12.79 8.28 L 18.34 4.95 L 15.62 10.82 Z"
      }
    ]
  ]
};

export const UmbilicEquator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.28 13.97 L 14.83 14.54 L 14.93 21.02 L 11.21 15.72 L 5.66 19.05 L 8.38 13.18 L 2.72 10.03 L 9.17 9.46 L 9.07 2.98 L 12.79 8.28 L 18.34 4.95 L 15.62 10.82 Z" />
      {children}
    </svg>
  );
});

export default UmbilicEquator;
