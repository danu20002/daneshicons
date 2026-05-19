import React from 'react';

export const iconData = {
  "id": "CelerSkeleton",
  "name": "CelerSkeleton",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const CelerSkeleton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0" stroke-dasharray="2 2" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default CelerSkeleton;
