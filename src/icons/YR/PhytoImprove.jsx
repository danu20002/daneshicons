import React from 'react';

export const iconData = {
  "id": "PhytoImprove",
  "name": "PhytoImprove",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.11 17.50 L 9.27 21.42 L 2.20 12.32 L 8.67 2.78 L 19.74 5.98 Z"
      }
    ]
  ]
};

export const PhytoImprove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.11 17.50 L 9.27 21.42 L 2.20 12.32 L 8.67 2.78 L 19.74 5.98 Z" />
      {children}
    </svg>
  );
});

export default PhytoImprove;
