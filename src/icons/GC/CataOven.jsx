import React from 'react';

export const iconData = {
  "id": "CataOven",
  "name": "CataOven",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.93 11.19 17.62 4.55 Q 18.54 5.39 19.47 6.23 Q 19.78 6.91 20.09 7.58 Q 17.60 9.12 15.11 10.66 Q 16.86 9.91 18.61 9.17 Q 16.59 11.02 14.58 12.87 Q 15.89 13.87 17.20 14.87 Q 10.71 16.35 4.23 17.83 Z"
      }
    ]
  ]
};

export const CataOven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.93 11.19 17.62 4.55 Q 18.54 5.39 19.47 6.23 Q 19.78 6.91 20.09 7.58 Q 17.60 9.12 15.11 10.66 Q 16.86 9.91 18.61 9.17 Q 16.59 11.02 14.58 12.87 Q 15.89 13.87 17.20 14.87 Q 10.71 16.35 4.23 17.83 Z" />
      {children}
    </svg>
  );
});

export default CataOven;
